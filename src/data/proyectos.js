// Contenido del sitio. Para agregar un proyecto basta con sumar un objeto aquí.
const gh = 'https://github.com/robledocordoba123-cmyk';

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
    codigo: `${gh}/CuentasClaras`,
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
    codigo: `${gh}/RitmoApp`,
    imagen: '/proyectos/ritmoapp-panel.png',
    imagenExtra: '/proyectos/ritmoapp-catalogo.png',
    extraEsCelular: false,
    color: '#a3e635',
  },
];

// Proyectos más pequeños, de práctica o de las competencias del SENA.
export const otros = [
  {
    nombre: 'SecureDesk ADSO',
    texto: 'API para registrar y clasificar incidentes de seguridad, con roles, contraseñas con hash, validación con Zod, límite de intentos y respaldos.',
    etiquetas: ['Node.js', 'Prisma', 'PostgreSQL', 'JWT'],
    enlace: `${gh}/securedesk-adso`,
  },
  {
    nombre: 'Landing + Panel',
    texto: 'Landing con formulario de contacto guardado en base de datos y un panel de administración protegido con login.',
    etiquetas: ['React', 'Tailwind', 'Express', 'Prisma'],
    enlace: `${gh}/landing-panel-frontend`,
  },
  {
    nombre: 'Sistema Educativo API',
    texto: 'API REST de 35 endpoints para profesores, cursos, horarios, inscripciones y notas, con su modelo entidad-relación.',
    etiquetas: ['Node.js', 'Express', 'SQLite', 'Render'],
    enlace: `${gh}/sistema-educativo-api`,
  },
  {
    nombre: 'Veterinaria en Docker',
    texto: 'API de mascotas donde todo el tráfico entra por Nginx como proxy inverso; la base de datos nunca queda expuesta.',
    etiquetas: ['Docker Compose', 'Nginx', 'MySQL'],
    enlace: `${gh}/veterinaria-docker`,
  },
  {
    nombre: 'MiniBlog en contenedores',
    texto: 'App en Flask con PostgreSQL, orquestada con Docker Compose y con integración continua en GitHub Actions.',
    etiquetas: ['Python', 'Flask', 'Docker', 'CI'],
    enlace: `${gh}/miniblog`,
  },
  {
    nombre: 'Kubernetes con Minikube',
    texto: 'Pods, Deployments con réplicas, Services, rolling updates con rollback y una arquitectura por namespaces.',
    etiquetas: ['Kubernetes', 'Minikube', 'YAML'],
    enlace: `${gh}/actividad-kubernetes-minikube`,
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

// Cada tecnología con su logo (archivos en public/tecnologias).
export const stack = [
  {
    grupo: 'Backend',
    items: [
      { nombre: 'Java', logo: 'java' },
      { nombre: 'Spring Boot', logo: 'spring' },
      { nombre: 'Node.js', logo: 'nodejs' },
      { nombre: 'Express', logo: 'express', oscuro: true },
      { nombre: 'PHP', logo: 'php' },
      { nombre: 'Python', logo: 'python' },
      { nombre: 'FastAPI', logo: 'fastapi' },
    ],
  },
  {
    grupo: 'Frontend',
    items: [
      { nombre: 'React', logo: 'react' },
      { nombre: 'JavaScript', logo: 'javascript' },
      { nombre: 'Tailwind CSS', logo: 'tailwindcss' },
      { nombre: 'Astro', logo: 'astro' },
      { nombre: 'HTML y CSS', logo: 'html5' },
    ],
  },
  {
    grupo: 'Datos',
    items: [
      { nombre: 'PostgreSQL', logo: 'postgresql' },
      { nombre: 'MySQL', logo: 'mysql' },
      { nombre: 'SQLite', logo: 'sqlite' },
      { nombre: 'Prisma', logo: 'prisma', oscuro: true },
    ],
  },
  {
    grupo: 'Calidad y DevOps',
    items: [
      { nombre: 'JUnit 5', logo: 'junit' },
      { nombre: 'Jest', logo: 'jest' },
      { nombre: 'Git', logo: 'git' },
      { nombre: 'GitHub Actions', logo: 'githubactions' },
      { nombre: 'Docker', logo: 'docker' },
      { nombre: 'Kubernetes', logo: 'kubernetes' },
      { nombre: 'Nginx', logo: 'nginx' },
      { nombre: 'Linux', logo: 'linux' },
      { nombre: 'Vercel', logo: 'vercel', oscuro: true },
    ],
  },
];

// Lo que no es una herramienta con logo: cómo analizo, diseño y aseguro un sistema.
export const practicas = [
  { grupo: 'Análisis y diseño', items: ['Historias de usuario', 'Requisitos', 'Casos de uso (UML)', 'Diagramas de secuencia', 'Modelo entidad-relación', 'BPMN', 'Scrum', 'draw.io'] },
  { grupo: 'Seguridad informática', items: ['Matriz de riesgos', 'Plan de contingencia', 'Implantación segura', 'Verificación preproducción', 'JWT y roles', 'Manejo de secretos'] },
];

export const camino = [
  { fecha: 'Julio 2024', titulo: 'Empiezo en el SENA', texto: 'Tecnología en Análisis y Desarrollo de Software, CTMA Medellín.' },
  { fecha: '2025', titulo: 'Bases sólidas', texto: 'Java, bases de datos, UML, historias de usuario y mis primeras APIs REST.' },
  { fecha: '2026', titulo: 'DevOps y seguridad', texto: 'Docker, Nginx, Kubernetes, integración continua y seguridad informática aplicada.' },
  { fecha: 'Sep 2026', titulo: 'Dos apps en producción', texto: 'RitmoApp y CuentasClaras en vivo, con pruebas, CI y despliegue.' },
  { fecha: 'Abril 2027', titulo: 'Etapa productiva', texto: 'Busco la empresa donde aportar y seguir creciendo. ¿Será la tuya?', destacado: true },
];
