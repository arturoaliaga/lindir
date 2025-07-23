// config/brand.js - Configuración centralizada de marca para Línea Directa
module.exports = {
  // Información básica de la marca
  name: 'Línea Directa',
  fullName: 'Línea Directa Club',
  
  // Mensajes y textos
  messages: {
    welcome: '¡Bienvenido a Línea Directa Club!',
    welcomeDescription: 'Gracias por unirte a Línea Directa Club',
    tagline: 'Demo de Salesforce Loyalty Management',
    joinClub: 'UNIRSE AL CLUB',
    benefits: {
      title: 'BENEFICIOS EXCLUSIVOS',
      list: [
        'Acumula puntos con cada póliza y renovación',
        'Descuentos especiales en seguros adicionales', 
        'Acceso prioritario a nuevos productos',
        'Asesoramiento personalizado y experiencias VIP'
      ]
    },
    features: [
      {
        title: 'Gana recompensas',
        description: 'Acumula puntos con cada póliza, renovación y referido, y canjéalos por descuentos exclusivos.'
      },
      {
        title: 'Consigue logros', 
        description: 'Desbloquea logros por tu fidelidad y comparte tus éxitos como cliente.'
      },
      {
        title: 'Sube de nivel',
        description: 'Progresa desde Conductor Novato hasta Cliente VIP con beneficios exclusivos.'
      }
    ]
  },
  
  // Paleta de colores - Basada en Línea Directa con rosa suave
  colors: {
    primary: '#E30613',          // Rojo corporativo Línea Directa
    secondary: '#F8E3E3',        // Rosa suave (reemplaza el amarillo horrible)
    accent: '#B30510',           // Rojo más oscuro para acentos
    lightGray: '#F8F9FA',        // Gris muy claro
    midGray: '#E9ECEF',          // Gris medio
    darkGray: '#6C757D',         // Gris oscuro
    textColor: '#212529',        // Negro para texto principal
    textLight: '#6C757D',        // Gris para texto secundario
    backgroundColor: '#FFFFFF',
    cardBackground: '#FFFFFF',
    borderColor: '#DEE2E6',      // Gris claro para bordes
    successColor: '#28A745',     // Verde éxito
    errorColor: '#DC3545',       // Rojo error
    notificationColor: '#E30613', // Rojo para notificaciones
    
    // Colores de tier - Temática de seguros y conducción
    tierColors: {
      bronze: '#CD7F32',         // Bronce - Conductor Novato
      silver: '#C0C0C0',         // Plata - Cliente Experimentado
      gold: '#FFD700',           // Oro - Cliente Experto
      platinum: '#E5E4E2'        // Platino - Cliente VIP
    }
  },
  
  // Rutas de imágenes
  images: {
    logo: '/img/logo.png',
    background: '/img/background.png',
    favicon: '/img/favicon.ico'
  },
  
  // Categorías de productos/intereses para registro
  categories: [
    { id: 'auto', label: 'Seguro de Auto' },
    { id: 'moto', label: 'Seguro de Moto' },
    { id: 'hogar', label: 'Seguro de Hogar' },
    { id: 'vida', label: 'Seguro de Vida' },
    { id: 'salud', label: 'Seguro de Salud' }
  ],
  
  // Copyright
  copyright: '2023-2025 Línea Directa Club'
};