import type { Project, SkillGroup, Experience, SocialLink } from "@/types";

// ============================================================
// PROJECTS DATA — Jaime Mamani
// ============================================================
export const projects: Project[] = [
  {
    id: "crypto-trading-monitor",
    title: "Sistema de Monitoreo y Predicción de Trading (Bybit) — NestJS + Angular & Ionic",
    description:
      "Sistema automatizado de monitoreo para mercados de Bitcoin y Ethereum mediante la API de Bybit, prediccion y asistencia de IA (Gemini). Incorpora detección de variaciones altas de precio, modelos de predicción de tendencia a 10, 30 y 60 minutos, cálculo preciso de posiciones de entrada y salida, y notificaciones en tiempo real a través de Telegram y alertas push móviles.",
    techs: [
      "Angular",
      "Ionic",
      "NestJS",
      "PostgreSQL",
      "Bybit API",
      "Telegram API",
      "TypeScript",
      "Tailwind CSS",
      "Gemini / LLMs"
    ],
    category: "fullstack",
    image: "/trade01.jpg",
    images: [
      "/trade01.jpg",
      "/trade02.jpg",
      "/trade03.jpg",
      "/trade04.jpg",
      "/trade05.jpg"
    ],
    client: "PROYECTO PERSONAL",
    featured: true,
    status: "completed",
    year: 2026,
  },
  {
    id: "uteppi-denuncias-app",
    title: "Aplicación Móvil Android (Denuncias) — Ionic + Angular",
    description:
      "Aplicación móvil nativa para dispositivos Android desarrollada con Angular e Ionic, diseñada para el envío de alertas ciudadanas.",
    techs: [
      "Ionic",
      "Angular",
      "Android",
      "TypeScript",
      "Firebase Messaging",
      "REST API",
      "Tailwind CSS"
    ],
    category: "mobile",
    image: "/04-denuncia.jpg",
    images: [
      "/04-denuncia.jpg",
      "/02-denuncia.jpg",
      "/03-denuncia.jpg",
      "/01-denuncia.jpg"
    ],
    client: "Unidad de Tecnológica Policial Preventiva e Investigativa (UTEPPI)",
    featured: true,
    status: "completed",
    year: 2026,
  },
  {
    id: "uteppi-patrullaje-app",
    title: "Aplicación Móvil Android (Patrullaje) — Ionic + Angular",
    description:
      "Aplicación móvil desarrollada con Angular e Ionic, diseñada para el registro de rutas e intervenciones para el personal en campo.",
    techs: [
      "Ionic",
      "Angular",
      "Android",
      "TypeScript",
      "Firebase Messaging",
      "REST API",
      "Tailwind CSS"
    ],
    category: "mobile",
    image: "/04-patrullero.png",
    images: [
      "/04-patrullero.png",
      "/03-patrullero.png",
      "/02-patrullero.png",
      "/05-patrullero.png"
    ],
    client: "Unidad de Tecnológica Policial Preventiva e Investigativa (UTEPPI)",
    featured: true,
    status: "completed",
    year: 2026,
  },
  {
    id: "uteppi-ecosistema-policial",
    title: "Plataforma Digital de Denuncias e Intervenciones Policiales — UTEPPI",
    description:
      "Plataforma web de monitoreo de denuncias, registro de rutas e intervenciones. Incluye despliegue en servidor on-premise con Debian, containerización y proxy inverso.",
    techs: [
      "Angular",
      "NestJS",
      "PostgreSQL",
      "Ionic",
      "Firebase",
      "Docker",
      "Nginx",
      "Debian",
      "Cloudflare",
      "Tailwind CSS",
      "Bootstrap",
      "Material Design"
    ],
    category: "fullstack",
    image: "/denuncias02.jpg",
    images: [
      "/denuncias01.jpg",
      "/denuncias02.jpg",
      "/denuncias03.jpg",
      "/denuncias04.jpg",
      "/denuncias05.jpg"
    ],
    client: "Unidad de Tecnológica Policial Preventiva e Investigativa (UTEPPI)",
    featured: true,
    status: "completed",
    year: 2026,
  },
  {
    id: "sig-vms-camaras-gamp",
    title: "Sistema de información geográfica + VMS — Angular+ leaflet + Office.js + Microsoft Graph",
    description:
      "Aplicación de monitoreo de cámaras de seguridad, geolocalización, mediante las APIs de Microsoft Graph para obtener información del dispositivo y Office.js para interactuar con Excel.",
    techs: ["Angular", "Office.js", "Microsoft Graph", "TypeScript"],
    category: "frontend",
    image: "/geo-camara04.jpg",
    images: [
      "/geo-camara04.jpg",
      "/geo-camara02.jpg",
      "/geo-camara03.jpg",
      "/geo-camara01.jpg"
    ],
    client: "Unidad de Camaras de Vigilancia - G.A.M.P.",
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: "restaurant-app",
    title: "Restaurant App — Ionic + Angular + NestJS",
    description:
      "Aplicación de gestión de restaurante con frontend en Angular + PrimeNG e Ionic para mobile. Backend con NestJS y PostgreSQL, autenticación JWT, roles y permisos.",
    techs: ["Ionic", "Angular", "PrimeNG", "TypeScript", "NestJS", "PostgreSQL", "JWT", "Bootstrap"],
    category: "fullstack",
    image: "/martina-01.jpeg",
    images: ["/martina-01.jpeg", "/martina-02.jpeg", "/martina-03.jpeg", "/martina-04.jpeg", "/martina-05.jpeg"],
    client: "Restaurante La Martina",
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: "sistema-academico",
    title: "Sistema Académico — Angular + AdminLTE + NestJS",
    description:
      "Sistema de gestión académica con frontend Angular usando AdminLTE para una estética profesional. Backend NestJS con arquitectura escalable, autenticación JWT y PostgreSQL.",
    techs: ["Angular", "AdminLTE", "TypeScript", "NestJS", "PostgreSQL", "JWT", "Bootstrap"],
    category: "fullstack",
    image: "/asistencia-01.jpeg",
    images: ["/asistencia-01.jpeg", "/asistencia-02.jpeg", "/asistencia-03.jpeg", "/asistencia-04.jpeg", "/asistencia-05.jpeg"],
    client: "Instituto Tecnológico Productivo El Alto",
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: "exportacion-minerales",
    title: "Exportación de Minerales — Angular + NestJS",
    description:
      "Aplicación completa para gestión de exportaciones mineras con firma digital, APIs REST, autenticación de usuarios, roles y permisos. Frontend Angular con Material Design.",
    techs: ["Angular", "TypeScript", "NestJS", "Material Design", "PostgreSQL", "JWT", "Bootstrap"],
    category: "fullstack",
    image: "/m03-5.jpeg",
    images: ["/m03-1.jpeg", "/m03-2.jpeg", "/m03-3.jpeg", "/m03-4.jpeg", "/m03-5.jpeg"],
    client: "SENARECOM",
    featured: true,
    status: "completed",
    year: 2024,
  },
  {
    id: "crud-angular-nest-mongo-front",
    title: "FRONTEND — CRUD Angular + NestJS + MongoDB",
    description:
      "Frontend para gestión de datos con operaciones CRUD completas. Construido con Angular y Material Design. Autenticación basada en JWT. Integración con backend NestJS.",
    techs: ["Angular", "TypeScript", "Material Design", "JWT", "Bootstrap"],
    category: "frontend",
    image: "/crud_angular_nest_mongo_front_01.jpeg",
    images: [
      "/crud_angular_nest_mongo_front_01.jpeg",
      "/crud_angular_nest_mongo_front_02.jpeg",
      "/crud_angular_nest_mongo_front_03.jpeg",
      "/crud_angular_nest_mongo_front_04.jpeg",
    ],
    githubUrl: "https://github.com/jaime-code-developer/crud_angular_nest_mongo_front",
    client: "Proyecto Personal",
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: "crud-angular-nest-mongo-back",
    title: "BACKEND — CRUD NestJS + MongoDB",
    description:
      "API RESTful con NestJS y MongoDB para gestión de datos CRUD. Incluye autenticación JWT, roles, validación de datos y arquitectura modular escalable.",
    techs: ["NestJS", "TypeScript", "MongoDB", "JWT", "Swagger"],
    category: "backend",
    image: "/crud_angular_nest_mongo_back_01.jpeg",
    images: [
      "/crud_angular_nest_mongo_back_01.jpeg",
      "/crud_angular_nest_mongo_back_02.jpeg",
      "/crud_angular_nest_mongo_back_03.jpeg",
      "/crud_angular_nest_mongo_back_04.jpeg",
    ],
    githubUrl: "https://github.com/jaime-code-developer/crud_angular_nest_mongo_back",
    client: "Proyecto Personal",
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: "crud-vue-laravel-front",
    title: "FRONTEND — CRUD Vue 3 + Vuetify + Pinia",
    description:
      "Aplicación web CRUD con Vue 3, Vuetify 3 y Pinia. Incluye autenticación de usuario (login/registro) y gestión de productos con operaciones completas.",
    techs: ["Vue 3", "TypeScript", "Vuetify 3", "Pinia", "Axios", "JWT"],
    category: "frontend",
    image: "/crud-vue-laravel-pg_front_01.jpeg",
    images: [
      "/crud-vue-laravel-pg_front_01.jpeg",
      "/crud-vue-laravel-pg_front_02.jpeg",
      "/crud-vue-laravel-pg_front_03.jpeg",
      "/crud-vue-laravel-pg_front_04.jpeg",
      "/crud-vue-laravel-pg_front_05.jpeg",
      "/crud-vue-laravel-pg_front_06.jpeg",
    ],
    githubUrl: "https://github.com/jaime-code-developer/crud_vue_laravel_pg_front",
    client: "Proyecto Personal",
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: "crud-vue-laravel-back",
    title: "BACKEND — API REST Laravel + PostgreSQL",
    description:
      "Backend RESTful con Laravel 11 para autenticación JWT y gestión de productos con operaciones CRUD. Diseñado para integrarse con cualquier SPA (Vue, React, Angular).",
    techs: ["Laravel", "PHP", "PostgreSQL", "JWT", "REST API"],
    category: "backend",
    image: "/crud-vue-laravel-pg_back_01.jpeg",
    images: [
      "/crud-vue-laravel-pg_back_01.jpeg",
      "/crud-vue-laravel-pg_back_02.jpeg",
      "/crud-vue-laravel-pg_back_03.jpeg",
      "/crud-vue-laravel-pg_back_04.jpeg",
      "/crud-vue-laravel-pg_back_05.jpeg",
      "/crud-vue-laravel-pg_back_06.jpeg",
    ],
    githubUrl: "https://github.com/jaime-code-developer/crud_vue_laravel_pg_back",
    client: "Proyecto Personal",
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: "comercializacion-minerales",
    title: "Comercialización de Minerales — SINACOM",
    description:
      "Sistema web para la compraventa y movimiento de minerales dentro del país. Desarrollado con Laravel MVC y PostgreSQL. Trazabilidad completa de la cadena de valor minera.",
    techs: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Laravel", "Bootstrap", "JWT", "PostgreSQL"],
    category: "fullstack",
    image: "/m02-01.jpeg",
    images: ["/m02-01.jpeg", "/m02-02.jpeg", "/m02-03.jpeg", "/m02-04.jpeg"],
    client: "SENARECOM",
    featured: false,
    status: "completed",
    year: 2023,
  },
  {
    id: "facturacion-en-linea",
    title: "Sistema de Facturación en Línea",
    description:
      "Sistema de facturación electrónica con CodeIgniter y PostgreSQL. Automatiza la emisión, gestión y envío de facturas electrónicas con alto rendimiento.",
    techs: ["CodeIgniter", "Bootstrap", "PostgreSQL", "JWT", "REST API"],
    category: "fullstack",
    image: "/facturacion-01.jpeg",
    images: ["/facturacion-01.jpeg", "/facturacion-02.jpeg", "/facturacion-03.jpeg", "/facturacion-04.jpeg"],
    client: "SENARECOM",
    featured: false,
    status: "completed",
    year: 2022,
  },
  {
    id: "crud-php-mongodb",
    title: "CRUD PHP + MongoDB — Seguridad Web",
    description:
      "Sistema diseñado para demostración educativa en ciberseguridad: ataques de fuerza bruta sobre autenticación. Backend PHP con MongoDB para registro de intentos.",
    techs: ["PHP", "MongoDB", "Bootstrap", "CSS3"],
    category: "fullstack",
    image: "/php-mongo-01.jpeg",
    images: ["/php-mongo-01.jpeg", "/php-mongo-02.jpeg", "/php-mongo-03.jpeg", "/php-mongo-04.jpeg"],
    githubUrl: "https://github.com/jaime-code-developer/brute_force_testing",
    client: "Proyecto Personal",
    featured: false,
    status: "completed",
    year: 2021,
  },
  {
    id: "sistema-contable",
    title: "Sistema Contable — Comercializadora Systematic",
    description:
      "Sistema contable web especializado para una comercializadora de computadoras. Construido con Laravel MVC y PostgreSQL, garantiza escalabilidad y seguridad de datos.",
    techs: ["Laravel", "MVC", "Bootstrap", "PostgreSQL"],
    category: "fullstack",
    image: "/systematic-01.jpeg",
    images: ["/systematic-01.jpeg", "/systematic-02.jpeg", "/systematic-03.jpeg", "/systematic-04.jpeg", "/systematic-05.jpeg"],
    githubUrl: "https://github.com/jaime-code-developer/contable_systematic",
    client: "Comercializadora Systematic",
    featured: false,
    status: "completed",
    year: 2020,
  },
  {
    id: "sistema-hotelero",
    title: "Sistema de Administración Hotelera",
    description:
      "Aplicación web para gestión de reservas, huéspedes, habitaciones y servicios hoteleros. Desarrollado con Django (MVC), interfaz intuitiva y escalabilidad garantizada.",
    techs: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    category: "fullstack",
    image: "/hotel-01.jpeg",
    images: ["/hotel-01.jpeg", "/hotel-02.jpeg", "/hotel-03.jpeg", "/hotel-04.jpeg", "/hotel-05.jpeg"],
    client: "Hotel Hadamas",
    featured: false,
    status: "completed",
    year: 2019,
  },
  {
    id: "sistema-encuestas",
    title: "Sistema Web de Encuestas Interactivas",
    description:
      "Plataforma para creación, administración y análisis de encuestas en línea. Desarrollado con Laravel MVC y PostgreSQL con soporte para grandes volúmenes de respuestas.",
    techs: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "Mobile"],
    category: "fullstack",
    image: "/medicina-01.jpeg",
    images: ["/medicina-01.jpeg", "/medicina-02.jpeg", "/medicina-03.jpeg", "/medicina-04.jpeg", "/medicina-05.jpeg", "/medicina-06.jpeg"],
    githubUrl: "https://github.com/jaime-code-developer/survey_student_php",
    client: "Carrera Medicina — UATF",
    featured: false,
    status: "completed",
    year: 2018,
  },
  {
    id: "control-asistencia",
    title: "Sistema de Control de Asistencia Estudiantil",
    description:
      "Solución integral para registro y monitoreo de asistencia estudiantil con QR y códigos PVC. Construida con Laravel MVC y PostgreSQL, proporciona datos en tiempo real.",
    techs: ["Laravel", "MVC", "PostgreSQL", "Bootstrap", "QR", "PVC"],
    category: "fullstack",
    image: "/braun-01.jpeg",
    images: ["/braun-01.jpeg", "/braun-02.jpeg", "/braun-03.jpeg", "/braun-04.jpeg"],
    githubUrl: "https://github.com/jaime-code-developer/student_assistance_laravel",
    client: "Colegio Braun",
    featured: false,
    status: "completed",
    year: 2017,
  },
];

// ============================================================
// SKILLS DATA — Jaime Mamani
// ============================================================
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Monitor",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Angular", level: "expert" },
      { name: "Ionic", level: "expert" },
      { name: "Vue 3 / Vuetify", level: "advanced" },
      { name: "TypeScript", level: "expert" },
      { name: "HTML5 / CSS3", level: "expert" },
      { name: "Bootstrap / PrimeNG", level: "expert" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "NestJS", level: "expert" },
      { name: "Laravel / CodeIgniter", level: "expert" },
      { name: "Django / Python", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "PHP", level: "expert" },
      { name: "REST APIs / JWT", level: "expert" },
    ],
  },
  {
    id: "databases",
    title: "Bases de Datos",
    icon: "HardDrive",
    color: "from-emerald-500 to-green-600",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MongoDB", level: "advanced" },
      { name: "MySQL / MariaDB", level: "advanced" },
      { name: "Prisma ORM", level: "intermediate" },
    ],
  },
  {
    id: "mobile",
    title: "Desarrollo Móvil",
    icon: "Shield",
    color: "from-rose-500 to-red-600",
    skills: [
      { name: "Ionic Framework", level: "expert" },
      { name: "Angular + Capacitor", level: "advanced" },
      { name: "Material Design", level: "advanced" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Herramientas",
    icon: "GitBranch",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Git / GitHub / GitLab", level: "expert" },
      { name: "Docker / Compose", level: "advanced" },
      { name: "Nginx", level: "intermediate" },
      { name: "Postman / Insomnia", level: "advanced" },
    ],
  },
  {
    id: "tools",
    title: "Metodologías & Más",
    icon: "Wrench",
    color: "from-slate-500 to-zinc-600",
    skills: [
      { name: "Scrum / Agile", level: "advanced" },
      { name: "MVC Architecture", level: "expert" },
      { name: "Clean Code", level: "advanced" },
      { name: "Linux / Bash", level: "intermediate" },
    ],
  },
];

// ============================================================
// EXPERIENCE DATA — Jaime Mamani
// ============================================================
export const experiences: Experience[] = [
  {
    id: "tradex",
    company: "Tradex",
    role: "Desarrollador Web Fullstack",
    period: "08/2026 – Presente",
    description:
      "Sistema automatizado de monitoreo para mercados de Bitcoin y Ethereum mediante la API de Bybit, prediccion y asistencia con IA (Gemini). Incorpora detección de variaciones altas de precio, modelos de predicción de tendencia a 10, 30 y 60 minutos, cálculo preciso de posiciones de entrada y salida, y notificaciones en tiempo real a través de Telegram y alertas push móviles.",
    techs: [
      "Angular",
      "Telegram API",
      "Gemini API",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "Debian",
      "Nginx",
      "Ionic",
      "Firebase",
      "Bootstrap",
      "Material Design",
    ],
    type: "freelance",
  },
  {
    id: "uteppi",
    company: "Unidad de Tecnológica Policial Preventiva e Investigativa (UTEPPI)",
    role: "Desarrollador de Software y Administrador de Servidores",
    period: "01/2026 – 07/2026",
    description:
      "Diseño e implementación de un ecosistema digital integral: plataforma web para recepción de denuncias, app móvil ciudadana para envío de alertas y app móvil para patrullas con registro de rutas e intervenciones en tiempo real. Ensamblaje y configuración de servidor local on-premise en Debian, arquitectura en contenedores con Docker, proxy inverso y hardening con Nginx, administración de PostgreSQL y seguridad/conectividad mediante Cloudflare.",
    techs: [
      "Angular",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "Debian",
      "Nginx",
      "Cloudflare",
      "Ionic",
      "Firebase",
      "Tailwind CSS",
      "Bootstrap",
      "Material Design",
    ],
    type: "full-time",
  },
  {
    id: "seguridad-ciudadana-potosi",
    company: "Unidad de Seguridad Ciudadana (Potosí)",
    role: "Desarrollador de Software",
    period: "09/2025 – 12/2025",
    description:
      "Diseño y puesta en marcha de un sistema para el monitoreo y geolocalización en tiempo real de las cámaras de vigilancia de la ciudad de Potosí. Integración de mapas geográficos y análisis de datos con Microsoft Excel.",
    techs: ["Angular", "Material Design", "Bootstrap", "Microsoft Excel", "TypeScript"],
    type: "contract",
  },
  {
    id: "modulo-tecnologico-el-alto",
    company: "Módulo Tecnológico Productivo \"El Alto\"",
    role: "Desarrollador Web Freelance",
    period: "06/2025 – 09/2025",
    description:
      "Desarrollo desde cero de un sistema web académico integral enfocado en la programación eficiente de materias, control digital de asistencia estudiantil/docente y reportería institucional.",
    techs: ["AdminLTE", "Angular", "NestJS", "MongoDB", "Bootstrap", "TypeScript"],
    type: "freelance",
  },
  {
    id: "restaurante-la-martina",
    company: "Restaurante \"La Martina\"",
    role: "Desarrollador Web Freelance",
    period: "01/2025 – 06/2025",
    description:
      "Creación de sistema y aplicación web/móvil para la automatización de procesos internos, gestión de comandas y pedidos, control de almacén y atención al cliente.",
    techs: ["PrimeNG", "Angular", "NestJS", "PostgreSQL", "Bootstrap", "Ionic", "TypeScript"],
    type: "freelance",
  },
  {
    id: "senarecom",
    company: "SENARECOM",
    role: "Analista Desarrollador Full Stack / Front-End / Back-End",
    period: "07/2022 – 12/2024",
    description:
      "Desarrollo Core en SINACOM 2: diseño y desarrollo de módulos Full Stack para exportaciones (precintos, pesaje de oro y piedras semipreciosas, reliquidaciones y control de aportes). Integración y Facturación Electrónica mediante APIs REST conectadas con AGETIC, SIN y SUFE. Interoperabilidad estatal de Formularios M-01 (NIM), M-02 y M-03 logrando digitalización masiva. Integración de Ciudadanía Digital, documentación técnica de APIs y capacitaciones continuas.",
    techs: [
      "Angular",
      "NestJS",
      "Spring Boot",
      "Laravel",
      "PostgreSQL",
      "CodeIgniter",
      "Material Design",
      "Bootstrap",
      "REST APIs",
    ],
    type: "full-time",
  },
  {
    id: "telecom-potosi-admin",
    company: "Telecom Potosí",
    role: "Encargado Administrativo",
    period: "2020 – 2022",
    description:
      "Liderazgo y gestión del talento humano de las áreas técnica y de ventas, coordinando cronogramas y flujos de trabajo. Supervisión del control de inventarios físicos y diseño de planes de capacitación técnica en campo. Administración de bases de datos internas y elaboración de estados financieros para toma de decisiones gerenciales.",
    techs: ["Gestión TI", "Bases de Datos", "Control de Inventarios", "Liderazgo de Equipos", "Administración"],
    type: "full-time",
  },
  {
    id: "telecom-potosi-seguridad",
    company: "Telecom Potosí",
    role: "Técnico de Seguridad Electrónica",
    period: "2019",
    description:
      "Instalación, programación y mantenimiento de sistemas de videovigilancia CCTV, switches PoE y redes de comunicación de datos. Configuración de seguridad electrónica perimetral e interna (sensores de movimiento, impacto, humo y rotura de vidrios). Implementación de control biométrico, telefonía VoIP, cableado estructurado, rastreo GPS y soporte Help Desk.",
    techs: ["CCTV", "Switches PoE", "PARADOX", "Seguridad electronica", "Redes de Datos", "VoIP", "Cableado Estructurado", "GPS", "Help Desk"],
    type: "full-time",
  },
  {
    id: "realsoft",
    company: "REALSOFT SRL",
    role: "Analista Programador de Sistemas",
    period: "2017",
    description:
      "Desarrollo e implementación de un Sistema de Control de Asistencia Estudiantil basado en la generación y lectura de códigos QR. Integración de hardware para lectores QR, configuración de infraestructura de red y fibra óptica, y soporte técnico preventivo/correctivo Help Desk.",
    techs: ["Laravel", "PostgreSQL", "Bootstrap", "Lectores QR", "Fibra Óptica", "Redes"],
    type: "full-time",
  },
  {
    id: "insa",
    company: "Instituto Nacional del Seguro Agrario (INSA)",
    role: "Técnico Digitalizador V – RAC",
    period: "2016 – 2017",
    description:
      "Administración, actualización y depuración de la base de datos del Registro Agrario Comunal (RAC) dentro del sistema nacional institucional, asegurando la integridad de información del seguro agrícola a nivel nacional y brindando soporte técnico Help Desk interno.",
    techs: ["Bases de Datos", "Depuración de Datos", "Soporte Help Desk", "Gestión Documental"],
    type: "contract",
  },
  {
    id: "systematic",
    company: "Empresa Comercial SYSTEMATIC SRL",
    role: "Desarrollador de Sistemas",
    period: "2015",
    description:
      "Diseño y desarrollo de sistema a medida para la gestión, control de inventarios y facturación de almacenes dedicados a la compra y venta de equipos de computación.",
    techs: ["Django", "PostgreSQL", "Bootstrap", "Python"],
    type: "contract",
  },
  {
    id: "brinks-bolivia",
    company: "Brinks Bolivia S.A.",
    role: "Técnico de Sistemas Integrales de Seguridad (SIS)",
    period: "2014 – 2015",
    description:
      "Soporte de infraestructura crítica y monitoreo continuo a cajeros automáticos y agencias bancarias (Banco Unión S.A., Banco Fassil S.A., Banco Pyme Ecofuturo S.A.). Instalación y programación de sistemas de seguridad remota GSM/IP y CCTV. Implementación de GPS en transporte blindado. Cableado estructurado, racks, switches y patch panels bajo normas ISO 27001, ISO 18028, ANSI/TIA/EIA-568-A, telefonía VoIP y sistemas de respaldo energético UPS.",
    techs: ["CCTV", "Seguridad Bancaria", "ATMs", "PARADOX", "Seguridad electronica", "Switches & Racks", "Cableado Estructurado", "VoIP", "UPS"],
    type: "full-time",
  },
  {
    id: "planeta-pc",
    company: "Planeta PC",
    role: "Técnico en Ensamblaje, Reparación y Mantenimiento de Computadoras",
    period: "2013",
    description:
      "Diagnóstico, reparación de hardware, mantenimiento preventivo y correctivo e instalación de sistemas operativos y software optimizado en equipos informáticos.",
    techs: ["Hardware", "Mantenimiento Preventivo", "Diagnóstico de PC", "Sistemas Operativos"],
    type: "contract",
  },
];

// ============================================================
// SOCIAL LINKS — Jaime Mamani
// ============================================================
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/jaime-code-developer",
    icon: "Github",
    username: "@jaime-code-developer",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/jaimemamanimendizabal",
    icon: "Linkedin",
    username: "linkedin.com/in/jaime-mamani",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@JamesSystemDev",
    icon: "Youtube",
    username: "@JamesSystemDev",
  },
  {
    id: "email",
    label: "Correo Profesional",
    url: "mailto:jaime.aspx@gmail.com",
    icon: "Mail",
    username: "jaime.aspx@gmail.com",
  },
];

// ============================================================
// PERSONAL INFO — Jaime Mamani
// ============================================================
export const personalInfo = {
  name: "Jaime",
  firstName: "Jaime",
  lastName: "Mamani",
  tagline: "Desarrollador Full Stack · Angular · NestJS · Laravel · Mobile",
  summary:
    "Ingeniero de Sistemas y desarrollador web full-stack con más de 7 años de experiencia creando aplicaciones modernas y eficientes. Especializado en Angular, NestJS, Laravel y Django, con sólido manejo de bases de datos SQL y NoSQL. Apasionado por el código limpio, las buenas prácticas y las soluciones que resuelven problemas reales.",
  location: "Potosí, Bolivia",
  phone: "+591 69619127",
  email: "jaime.aspx@gmail.com",
  available: true,
  yearsOfExperience: 7,
  projectsCompleted: 19,
  technologiesMastered: 20,
};

// Re-export videos & YouTube channel data
export * from "./videos";
