// Las capturas se importan para que Astro las optimice (WebP y varios tamaños).
import ccResumen from '../assets/proyectos/cuentasclaras-resumen.png';
import ccCelular from '../assets/proyectos/cuentasclaras-celular.png';
import raPanel from '../assets/proyectos/ritmoapp-panel.png';
import raCatalogo from '../assets/proyectos/ritmoapp-catalogo.png';
import ecVender from '../assets/proyectos/elcuaderno-vender.png';
import ecCelular from '../assets/proyectos/elcuaderno-celular.png';
import huInicio from '../assets/proyectos/huellitas-inicio.png';
import huWhatsapp from '../assets/proyectos/huellitas-whatsapp-celular.png';

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
      { valor: '70', texto: 'pruebas contra PostgreSQL real' },
      { valor: '10', texto: 'Pull Requests con CI en verde' },
      { valor: '28', texto: 'endpoints documentados en Swagger' },
    ],
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA', 'Flyway', 'PostgreSQL', 'React', 'Testcontainers', 'Docker'],
    demo: 'https://cuentasclaras-demo.vercel.app',
    codigo: `${gh}/CuentasClaras`,
    imagen: ccResumen,
    imagenExtra: ccCelular,
    extraEsCelular: true,
    color: '#10b981',
  },
  {
    id: 'ritmoapp',
    nombre: 'RitmoApp',
    anio: '2026',
    tipo: 'Proyecto de grado · SENA',
    frase: 'Plataforma SaaS para que las academias de baile dejen el cuaderno y el Excel.',
    problema:
      'Las academias de baile manejan clases, cupos y asistencia con cuadernos, hojas de cálculo y grupos de WhatsApp. Se cruzan horarios, se venden cupos de más y nadie sabe qué salón se usa.',
    solucion:
      'Una plataforma donde cada academia se registra sola, con cuatro roles: SuperAdmin, administrador, profesor y estudiante. Tiene salones, calendario de clases, reservas con cupos en tiempo real, asistencia con código QR, pagos y membresías, avisos por correo, bitácora de cambios y reportes.',
    reto:
      'Sin sobrecupo aunque dos personas reserven el último cupo al mismo tiempo (UPDATE condicional dentro de una transacción), y cada academia totalmente aislada de las demás desde la capa de datos.',
    cifras: [
      { valor: '182', texto: 'pruebas con Jest, Supertest y Vitest' },
      { valor: '4', texto: 'roles con permisos distintos' },
      { valor: '0', texto: 'sobrecupos bajo concurrencia' },
    ],
    stack: ['Node.js', 'Express 5', 'Prisma', 'PostgreSQL', 'React', 'Tailwind CSS', 'JWT', 'Jest', 'Vitest', 'GitHub Actions'],
    demo: 'https://ritmoapp-demo.vercel.app',
    codigo: `${gh}/RitmoApp`,
    imagen: raPanel,
    imagenExtra: raCatalogo,
    extraEsCelular: false,
    color: '#a3e635',
  },
  {
    id: 'elcuaderno',
    nombre: 'ElCuaderno',
    anio: '2026',
    tipo: 'Proyecto personal',
    frase: 'El cuaderno de fiados de la tienda de barrio, ahora en el celular.',
    problema:
      'En la tienda de barrio se fía y se anota en un cuaderno. Ahí se pierden las cuentas: nadie sabe cuánto debe cada vecino, qué se está acabando ni cuánto se ganó en el día.',
    solucion:
      'Un punto de venta para el celular del mostrador: ventas en efectivo, Nequi o fiado, inventario que se descuenta solo, cupo de fiado por cliente, abonos y el cierre de caja del día con la ganancia real.',
    reto:
      'TypeScript de punta a punta con los mismos esquemas Zod validando el formulario y la API, y sin sobreventa ni fiados por encima del cupo aunque dos cajeros vendan al mismo tiempo (UPDATE condicional y SELECT ... FOR UPDATE).',
    cifras: [
      { valor: '27', texto: 'pruebas contra PostgreSQL real' },
      { valor: '2', texto: 'roles: dueña y cajero' },
      { valor: '1', texto: 'esquema Zod por regla, en front y back' },
    ],
    stack: ['TypeScript', 'NestJS', 'Drizzle ORM', 'PostgreSQL', 'Zod', 'React', 'TanStack Query', 'Tailwind CSS', 'Jest'],
    demo: 'https://elcuaderno-demo.vercel.app',
    codigo: `${gh}/ElCuaderno`,
    imagen: ecVender,
    imagenExtra: ecCelular,
    extraEsCelular: true,
    color: '#f59e0b',
  },
  {
    id: 'huellitas',
    nombre: 'Huellitas',
    anio: '2026',
    tipo: 'Proyecto para negocios',
    frase: 'La web de una veterinaria que agenda citas sola, también por WhatsApp.',
    problema:
      'Las veterinarias de barrio reciben las citas por llamadas y por WhatsApp a cualquier hora. Los mensajes se pierden, se repiten las mismas preguntas todo el día y nadie tiene la agenda en un solo lugar.',
    solucion:
      'Una página web donde el cliente pide su cita en un minuto, un panel para que el negocio las atienda, y un asistente de WhatsApp que responde servicios y horarios, toma los datos de la cita y la deja en el mismo panel. Si hace falta, pasa la conversación a una persona.',
    reto:
      'Que el asistente sea seguro y no dependa de una IA: un motor de conversación propio guarda cada paso, el webhook de WhatsApp verifica la firma de Meta y la IA (Claude) es opcional, solo para entender mensajes libres.',
    cifras: [
      { valor: '20', texto: 'pruebas con Jest y Supertest' },
      { valor: '2', texto: 'canales: web y WhatsApp' },
      { valor: '1', texto: 'panel para todas las citas' },
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'WhatsApp Cloud API', 'Jest'],
    demo: 'https://huellitas-veterinaria.vercel.app',
    codigo: `${gh}/landing-panel-backend`,
    imagen: huInicio,
    imagenExtra: huWhatsapp,
    extraEsCelular: true,
    color: '#14b8a6',
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
      { nombre: 'NestJS', logo: 'nestjs' },
      { nombre: 'Express', logo: 'express', oscuro: true },
      { nombre: 'C#', logo: 'csharp' },
      { nombre: '.NET', logo: 'dotnet' },
      { nombre: 'PHP', logo: 'php' },
      { nombre: 'Laravel', logo: 'laravel' },
      { nombre: 'Python', logo: 'python' },
      { nombre: 'FastAPI', logo: 'fastapi' },
    ],
  },
  {
    grupo: 'Frontend',
    items: [
      { nombre: 'React', logo: 'react' },
      { nombre: 'TypeScript', logo: 'typescript' },
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
      { nombre: 'SQL Server', logo: 'sqlserver' },
      { nombre: 'SQLite', logo: 'sqlite' },
      { nombre: 'MongoDB', logo: 'mongodb' },
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
  { grupo: 'Análisis y diseño', items: ['Historias de usuario', 'Requisitos', 'Propuesta técnica', 'Casos de uso (UML)', 'Diagramas de secuencia', 'Modelo entidad-relación', 'BPMN', 'Scrum', 'draw.io', 'Control de calidad', 'Investigación formativa'] },
  { grupo: 'Seguridad informática', items: ['Matriz de riesgos', 'Plan de contingencia', 'Implantación segura', 'Verificación preproducción', 'JWT y roles', 'Manejo de secretos'] },
];

export const camino = [
  { fecha: 'Julio 2025', titulo: 'Empiezo en el SENA', texto: 'Tecnología en Análisis y Desarrollo de Software, CTMA Medellín.' },
  { fecha: '2025', titulo: 'Bases sólidas', texto: 'Java, bases de datos, UML, historias de usuario y mis primeras APIs REST.' },
  { fecha: '2026', titulo: 'DevOps y seguridad', texto: 'Docker, Nginx, Kubernetes, integración continua y seguridad informática aplicada.' },
  { fecha: 'Sep 2026', titulo: 'Tres apps en producción', texto: 'RitmoApp, CuentasClaras y ElCuaderno en vivo, con pruebas, CI y despliegue.' },
  { fecha: 'Oct 2026', titulo: 'Para negocios reales', texto: 'Huellitas: la web de citas de una veterinaria, con un asistente de WhatsApp que agenda solo.' },
  { fecha: 'Oct 2026', titulo: 'Certificado de Anthropic', texto: 'Building with the Claude API: prompts, uso de herramientas, RAG, MCP y agentes de IA.', enlace: 'https://academy.claude.com/verify/e4e45562c0607451741ccedcbaec4988' },
  { fecha: 'Abril 2027', titulo: 'Etapa productiva', texto: 'Busco la empresa donde aportar y seguir creciendo. ¿Será la tuya?', destacado: true },
];
