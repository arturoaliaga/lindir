// config/catalog.js - Configuración centralizada de productos, actividades y recompensas para Línea Directa
module.exports = {
  // Productos para la página de acumulación (seguros y servicios)
  products: [
    { 
      id: 1, 
      name: 'Seguro de Auto Básico', 
      price: 45, 
      points: 450, 
      image: 'compra1.png',
      description: 'Protección completa para tu vehículo con cobertura de terceros, robo e incendio. Incluye asistencia en carretera 24/7.',
      category: 'auto',
      isPremium: false,
      buttonText: 'Contratar'
    },
    { 
      id: 2, 
      name: 'Seguro de Moto Premium', 
      price: 25, 
      points: 250, 
      image: 'compra2.png',
      description: 'Cobertura integral para tu moto con protección contra todo riesgo, accesorios y equipo de protección personal.',
      category: 'moto',
      isPremium: false,
      buttonText: 'Contratar'
    },
    { 
      id: 3, 
      name: 'Seguro de Hogar Todo Riesgo', 
      price: 85, 
      points: 850, 
      image: 'compra3.png',
      description: 'Protección completa para tu hogar: continente, contenido, responsabilidad civil y asistencia domiciliaria.',
      category: 'hogar',
      isPremium: true,
      premiumTrigger: 'Seguro de Hogar Todo Riesgo',
      buttonText: 'Contratar'
    },
    { 
      id: 4, 
      name: 'Seguro de Vida Familiar', 
      price: 35, 
      points: 350, 
      image: 'compra4.png',
      description: 'Tranquilidad para tu familia con cobertura de fallecimiento, invalidez y asistencia médica telefónica.',
      category: 'vida',
      isPremium: false,
      buttonText: 'Contratar'
    },
    { 
      id: 5, 
      name: 'Seguro de Salud Plus', 
      price: 65, 
      points: 650, 
      image: 'compra5.png',
      description: 'Atención médica privada con acceso a los mejores especialistas y centros médicos sin listas de espera.',
      category: 'salud',
      isPremium: false,
      buttonText: 'Contratar'
    }
  ],

  // Actividades para ganar puntos
  activities: [
    { 
      id: 1, 
      name: 'Descargar la App Línea Directa', 
      points: 100, 
      image: 'actividad1.png',
      category: 'app',
      buttonText: 'Realizar actividad'
    },
    { 
      id: 2, 
      name: 'Completar perfil de conductor', 
      points: 75, 
      image: 'actividad2.png',
      category: 'profile',
      challengeTrigger: 'profile_complete',
      buttonText: 'Realizar actividad'
    },
    { 
      id: 3, 
      name: 'Recomendar a un amigo', 
      points: 150, 
      image: 'actividad3.png',
      category: 'referral',
      buttonText: 'Realizar actividad'
    },
    { 
      id: 4, 
      name: 'Compartir experiencia en redes', 
      points: 60, 
      image: 'actividad4.png',
      category: 'social',
      challengeTrigger: 'social_share',
      buttonText: 'Realizar actividad'
    }
  ],

  // Recompensas para la página de redención - CON EL 25% CORREGIDO
  rewards: [
    { 
      id: 1, 
      name: 'Cupón 15% descuento próximo seguro', 
      points: 300, 
      type: 'discount', 
      image: 'descuento1.png',
      codePrefix: 'LD15',
      buttonText: 'Canjear'
    },
    { 
      id: 2, 
      name: 'Cupón 25% descuento renovación', 
      points: 500, 
      type: 'discount', 
      image: 'descuento2.png',
      codePrefix: 'LD25',
      buttonText: 'Canjear'
    },
    { 
      id: 3, 
      name: 'Consulta gratuita con asesor', 
      points: 200, 
      type: 'experience', 
      image: 'experiencia1.png',
      codePrefix: 'ASES',
      buttonText: 'Canjear'
    },
    { 
      id: 4, 
      name: 'Revisión ITV gratuita', 
      points: 400, 
      type: 'experience', 
      image: 'experiencia2.png',
      codePrefix: 'ITV',
      buttonText: 'Canjear'
    }
  ],

  // Configuración de challenges/retos
  challenges: [
    {
      id: 'multi_seguros',
      name: 'Cliente Multi-Seguros',
      description: 'Contrata al menos 2 seguros diferentes (auto, moto, hogar, vida o salud)',
      reward: 100,
      goal: 2,
      type: 'multi_insurance',
      triggerCategory: 'insurance'
    },
    {
      id: 'profile_complete',
      name: 'Perfil de Conductor Completo',
      description: 'Completa toda la información de tu perfil de conductor (4 veces)',
      reward: 75,
      goal: 4,
      type: 'profile'
    },
    {
      id: 'social_share',
      name: 'Embajador Línea Directa',
      description: 'Comparte tu experiencia con Línea Directa 3 veces en redes sociales',
      reward: 100,
      goal: 3,
      type: 'social'
    }
  ],

  // Configuración de logros
  achievements: [
    {
      id: 'welcome',
      name: 'Bienvenida',
      description: 'Te has unido al programa de fidelidad Línea Directa Club',
      points: 25,
      icon: 'star',
      category: 'general',
      hideWhenLocked: false,
      autoUnlock: true
    },
    {
      id: 'first_purchase',
      name: 'Primer Seguro',
      description: 'Has contratado tu primer seguro con Línea Directa',
      points: 75,
      icon: 'shield-alt',
      category: 'purchase',
      hideWhenLocked: false,
      hint: 'Contrata tu primer seguro con nosotros',
      trigger: 'purchase'
    },
    {
      id: 'premium_purchase',
      name: 'Cliente Premium',
      description: 'Has contratado el Seguro de Hogar Todo Riesgo',
      points: 200,
      icon: 'home',
      category: 'purchase',
      hideWhenLocked: false,
      hint: 'Contrata nuestro Seguro de Hogar Todo Riesgo',
      trigger: 'premium_purchase'
    },
    {
      id: 'first_redemption',
      name: 'Primer Canje',
      description: 'Has canjeado tus puntos por primera vez',
      points: 50,
      icon: 'gift',
      category: 'redemption',
      hideWhenLocked: false,
      hint: 'Canjea tus puntos por una recompensa',
      trigger: 'redemption'
    },
    {
      id: 'challenge_multi_seguros',
      name: 'Cliente Multi-Seguros',
      description: 'Completaste el reto de contratar múltiples seguros',
      points: 50,
      icon: 'check-circle',
      category: 'challenge',
      hideWhenLocked: false,
      hint: 'Contrata al menos 2 seguros diferentes',
      trigger: 'challenge_complete'
    },
    {
      id: 'challenge_profile_complete',
      name: 'Perfil de Conductor Completo',
      description: 'Completaste el reto de perfil de conductor (4 veces)',
      points: 50,
      icon: 'user-check',
      category: 'challenge',
      hideWhenLocked: false,
      hint: 'Completa toda la información de tu perfil de conductor 4 veces',
      trigger: 'challenge_complete'
    },
    {
      id: 'challenge_social_share',
      name: 'Embajador Línea Directa',
      description: 'Completaste el reto de compartir en redes sociales',
      points: 75,
      icon: 'share-alt',
      category: 'social',
      hideWhenLocked: false,
      hint: 'Comparte tu experiencia 3 veces en redes sociales',
      trigger: 'challenge_complete'
    },
    {
      id: 'tier_silver',
      name: 'Cliente Experimentado',
      description: 'Has alcanzado el nivel Cliente Experimentado',
      points: 100,
      icon: 'award',
      category: 'tier',
      hideWhenLocked: false,
      hint: 'Alcanza 500 puntos',
      trigger: 'tier_update',
      tierRequired: 'Silver'
    },
    {
      id: 'tier_gold',
      name: 'Cliente Experto',
      description: 'Has alcanzado el nivel Cliente Experto',
      points: 200,
      icon: 'award',
      category: 'tier',
      hideWhenLocked: false,
      hint: 'Alcanza 1000 puntos',
      trigger: 'tier_update',
      tierRequired: 'Gold'
    },
    {
      id: 'tier_platinum',
      name: 'Cliente VIP',
      description: 'Has alcanzado el nivel Cliente VIP',
      points: 300,
      icon: 'crown',
      category: 'tier',
      hideWhenLocked: false,
      hint: 'Alcanza 2000 puntos',
      trigger: 'tier_update',
      tierRequired: 'Platinum'
    }
  ]
};