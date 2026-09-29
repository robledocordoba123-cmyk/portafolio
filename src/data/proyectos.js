// Contenido de los proyectos. Para agregar uno nuevo basta con sumar un objeto aquí.
export const proyectos = [
  {
    id: 'cuentasclaras',
    nombre: 'CuentasClaras',
    anio: '2026',
    tipo: 'Proyecto personal',
    frase: 'Tus finanzas en un solo lugar: efectivo, Nequi, Daviplata y banco.',
    problema:
      'Las apps de los bancos solo muestran lo que pasa por ese banco. El efectivo y las billeteras digitales quedan por fuera, y a fin de mes nadie sabe en qué se fue la plata.',
    solucion:
      'Una app web para registrar ingresos y gastos por cuenta y categoría, pasar plata entre cuentas propias, ponerse presupuestos con alertas al 80 % y al 100 %, ver el mes en gráficas y exportar todo a Excel.',
    reto:
      'Que la plata siempre cuadre: montos con BigDecimal (nunca double), saldos calculados y transferencias atómicas. Si una parte falla, no se guarda ninguna. Lo compruebo con una prueba que fuerza el error.',
    cifras: [
      { valor: '72', texto: 'pruebas contra PostgreSQL real' },
      { valor: '10', texto: 'Pull Requests con CI en verde' },
      { valor: '28', texto: 'endpoints documentados en Swagger' },
    ],
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA', 'Flyway', 'PostgreSQL', 'React', 'Testcontainers', 'Docker'],
    demo: 'https://cuentasclaras-demo.vercel.app',
    codigo: 'https://github.com/robledocordoba123-cmyk/CuentasClaras',
    imagen: '/proyectos/cuentasclaras-resumen.png',
    imagenExtra: '/proyectos/cuentasclaras-celular.png',
    extraEsCelular: true,
    color: '#10b981',
  },
  {
    id: 'ritmoapp',
    nombre: 'RitmoApp',
    anio: '2026',
    tipo: 'Proyecto formativo · SENA',
    frase: 'Plataforma SaaS para que las academias de baile dejen el cuaderno y el Excel.',
    problema:
      'Las academias de baile manejan clases, cupos y asistencia con cuadernos, hojas de cálculo y grupos de WhatsApp. Se cruzan horarios, se venden cupos de más y nadie sabe qué salón se usa.',
    solucion:
      'Una plataforma donde cada academia se registra sola, con cuatro roles: SuperAdmin, administrador, profesor y estudiante. Tiene salones, calendario de clases, reservas con cupos en tiempo real, asistencia y reportes de ocupación.',
    reto:
      'Sin sobrecupo aunque dos personas reserven el último cupo al mismo tiempo (UPDATE condicional dentro de una transacción), y cada academia totalmente aislada de las demás desde la capa de datos.',
    cifras: [
      { valor: '47', texto: 'pruebas con Jest y Supertest' },
      { valor: '4', texto: 'roles con permisos distintos' },
      { valor: '0', texto: 'sobrecupos bajo concurrencia' },
    ],
    stack: ['Node.js', 'Express 5', 'Prisma', 'PostgreSQL', 'React', 'Tailwind CSS', 'JWT', 'Jest', 'GitHub Actions'],
    demo: 'https://ritmoapp-demo.vercel.app',
    codigo: 'https://github.com/robledocordoba123-cmyk/RitmoApp',
    imagen: '/proyectos/ritmoapp-panel.png',
    imagenExtra: '/proyectos/ritmoapp-catalogo.png',
    extraEsCelular: false,
    color: '#a3e635',
  },
];

export const pasos = [
  {
    numero: '1',
    titulo: 'Diseño',
    texto: 'Antes de programar entiendo el problema: historias de usuario, reglas de negocio y el modelo de datos, todo escrito.',
  },
  {
    numero: '2',
    titulo: 'Código',
    texto: 'Una rama y un Pull Request por funcionalidad. Código organizado por módulos y fácil de leer para el equipo.',
  },
  {
    numero: '3',
    titulo: 'Pruebas',
    texto: 'Pruebas automáticas contra una base de datos real, que corren en GitHub Actions en cada cambio.',
  },
  {
    numero: '4',
    titulo: 'Despliegue',
    texto: 'Docker, Vercel, Render y Neon. Los secretos van fuera del código y la demo queda en vivo para probarla.',
  },
];

export const stack = [
  { grupo: 'Backend', items: ['Java 21', 'Spring Boot', 'Spring Security', 'Node.js', 'Express', 'APIs REST', 'JWT'] },
  { grupo: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Astro'] },
  { grupo: 'Datos', items: ['PostgreSQL', 'MySQL', 'SQL', 'JPA / Hibernate', 'Prisma', 'Flyway'] },
  { grupo: 'Calidad y DevOps', items: ['JUnit 5', 'Testcontainers', 'Jest', 'Git', 'GitHub Actions', 'Docker', 'Vercel', 'Render'] },
];
