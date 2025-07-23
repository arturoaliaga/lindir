const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const basicAuth = require('express-basic-auth');
require('dotenv').config();

// Importar configuración centralizada
const config = require('./config/index');
const brandConfig = config.brand;

// Importar rutas
const indexRoutes = require('./routes/index');
const registerRoutes = require('./routes/register');
const accrualRoutes = require('./routes/accrual');
const redemptionRoutes = require('./routes/redemption');
const achievementsRoutes = require('./routes/achievements');
const leaderboardRoutes = require('./routes/leaderboard');

// Inicializar app
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar autenticación básica (antes de cualquier otro middleware)
if (process.env.NODE_ENV !== 'development') {
  app.use(basicAuth({
    users: { 
      [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD
    },
    challenge: true,
    realm: `${brandConfig.fullName} Demo App`,
  }));
}

// Configuración de sesiones
app.use(session({
  secret: process.env.SESSION_SECRET || 'linea-directa-demo-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Cambiar a true en producción con HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}));

// Configuración de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para hacer disponible la configuración de marca en todas las vistas
app.use((req, res, next) => {
  res.locals.brand = brandConfig;
  next();
});

// Middleware para verificar configuración de Salesforce
app.use((req, res, next) => {
  const useSalesforce = process.env.USE_SALESFORCE === 'true';
  
  // Pasar variable a todas las vistas
  res.locals.useSalesforce = useSalesforce;
  
  // Si estamos usando Salesforce, mostrar mensaje en consola
  if (useSalesforce) {
    console.log('Modo Salesforce Loyalty Management ACTIVADO');
  } else {
    console.log('Modo Demo local ACTIVADO (sin conexión a Salesforce)');
  }
  
  next();
});

// Middleware para pasar información de sesión a las vistas
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.memberId = req.session.memberId || null;
  
  // Obtener el miembro actual si existe sesión
  if (req.session.memberId) {
    const Member = require('./models/member');
    const currentMember = Member.findById(req.session.memberId);
    if (currentMember) {
      res.locals.member = currentMember;
      req.member = currentMember;
    } else {
      // Sesión inválida, limpiarla
      req.session.destroy();
      res.locals.member = null;
    }
  } else {
    res.locals.member = null;
  }
  
  next();
});

// Rutas
app.use('/', indexRoutes);
app.use('/register', registerRoutes);
app.use('/accrual', accrualRoutes);
app.use('/redemption', redemptionRoutes);
app.use('/achievements', achievementsRoutes);
app.use('/leaderboard', leaderboardRoutes);

// Ruta para cerrar sesión
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});

// Manejo de errores - asegurarse de que este middleware esté al final
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    message: err.message || 'Ha ocurrido un error interno',
    error: process.env.NODE_ENV === 'development' ? err : {},
    currentPage: 'error'
  });
});

// Manejo de 404 - página no encontrada
app.use((req, res, next) => {
  res.status(404).render('error', {
    message: 'Página no encontrada',
    error: { status: 404 },
    currentPage: 'error'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
  console.log(`Marca: ${brandConfig.fullName}`);
  console.log(`Modo: ${process.env.USE_SALESFORCE === 'true' ? 'Salesforce Loyalty' : 'Demo Local'}`);
  console.log(`URL: http://localhost:${PORT}`);
});