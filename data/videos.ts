import type { Video } from "@/types";

// ============================================================
// CANAL DE YOUTUBE — @JamesSystemDev
// ============================================================
export const youtubeChannel = {
  name: "James System Dev",
  handle: "@JamesSystemDev",
  url: "https://www.youtube.com/@JamesSystemDev",
  description:
    "Canal dedicado a la administración de servidores Linux, seguridad de infraestructura, virtualización, contenedores Docker y redes de datos para SysAdmins y desarrolladores.",
  topicBadges: [
    "Linux Debian / Ubuntu",
    "Docker & Contenedores",
    "Seguridad & SSH",
    "Redes & Subnetting",
    "DevOps & Servidores",
  ],
};

// ============================================================
// VIDEOS / TUTORIALES TÉCNICOS
// ============================================================
export const videos: Video[] = [
  {
    id: "debian-vmware-ssh",
    title: "01 Cómo Instalar Debian en VMware y Configurar Servidor SSH + Sudo (Paso a Paso)",
    description:
      "Aprende a instalar y realizar la configuración básica de un servidor con Debian en una máquina virtual utilizando VMware. Desde la descarga de la ISO, particionado, configuración de red, hasta la habilitación del servicio SSH y privilegios sudo para administración segura.",
    thumbnail: "https://img.youtube.com/vi/P9YeTh0ZGrQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=P9YeTh0ZGrQ",
    youtubeId: "P9YeTh0ZGrQ",
    category: "sysadmin",
    categoryLabel: "Administración de Sistemas",
    tags: ["Debian", "VMware", "SSH", "Linux", "SysAdmin"],
    duration: "38:20",
    featured: true,
    publishedAt: "2024",
  },
  {
    id: "debian-seguridad-ssh",
    title: "02 Gestión de Usuarios y Seguridad SSH en Debian desde Cero (Guía Práctica)",
    description:
      "Aprende a configurar la gestión de usuarios y la seguridad en un servidor Debian recién instalado aplicando las mejores prácticas de administración de sistemas y el Principio de Menor Privilegio (POLP). Autenticación por llaves públicas, hardening SSH y configuración de firewall.",
    thumbnail: "https://img.youtube.com/vi/aGjfc4d91cg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=aGjfc4d91cg",
    youtubeId: "aGjfc4d91cg",
    category: "seguridad",
    categoryLabel: "Seguridad & Hardening",
    tags: ["SSH Hardening", "Debian", "Seguridad", "Usuarios", "Linux"],
    duration: "45:15",
    featured: true,
    publishedAt: "2024",
  },
  {
    id: "docker-fundamentos-compose",
    title: "Docker y Docker Compose: De Contenedores Básicos a Despliegues en Producción",
    description:
      "Aprende a contenerizar aplicaciones web modernas paso a paso. Creación de Dockerfiles multi-stage optimizados, configuración de redes internas en Docker Compose, gestión de volúmenes persistentes y buenas prácticas de seguridad.",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/@JamesSystemDev",
    category: "docker",
    categoryLabel: "Docker & Contenedores",
    tags: ["Docker", "Docker Compose", "Multi-Stage", "DevOps", "Linux"],
    duration: "34:10",
    featured: true,
    publishedAt: "2024",
  },
  {
    id: "redes-subnetting-linux",
    title: "Fundamentos de Redes en Linux: Subnetting, Enrutamiento y Diagnóstico con CLI",
    description:
      "Domina el stack de networking en sistemas operativos Linux. Configuración de interfaces IP estáticas y DHCP, cálculo de subredes CIDR, tablas de enrutamiento con iproute2, análisis de tráfico con tcpdump y diagnóstico de puertos.",
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/@JamesSystemDev",
    category: "redes",
    categoryLabel: "Redes & Networking",
    tags: ["Redes", "Subnetting", "TCP/IP", "iproute2", "tcpdump"],
    duration: "29:45",
    featured: false,
    publishedAt: "2024",
  },
  {
    id: "nginx-reverse-proxy-ssl",
    title: "Nginx Reverse Proxy con SSL Automático Let's Encrypt y Hardening en Debian",
    description:
      "Implementación completa de Nginx como proxy inverso para proteger y distribuir tráfico a múltiples servicios y contenedores. Generación automática y renovación de certificados SSL gratuitos con Certbot y cabeceras de seguridad HTTP.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/@JamesSystemDev",
    category: "sysadmin",
    categoryLabel: "Administración de Sistemas",
    tags: ["Nginx", "Reverse Proxy", "SSL", "Certbot", "SysAdmin"],
    duration: "26:30",
    featured: false,
    publishedAt: "2024",
  },
  {
    id: "docker-redes-aislamiento",
    title: "Redes en Docker Avanzado: Bridge, Host y Aislamiento de Microservicios",
    description:
      "Comprende a fondo el funcionamiento de los drivers de red en Docker. Creación de redes personalizadas aisladas para bases de datos y APIs, inspección de paquetes virtuales y comunicación segura entre contenedores.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/@JamesSystemDev",
    category: "docker",
    categoryLabel: "Docker & Redes",
    tags: ["Docker Networks", "Bridge", "Microservicios", "Seguridad"],
    duration: "22:50",
    featured: false,
    publishedAt: "2024",
  },
];
