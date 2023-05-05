export const skills = [
  {
    name: "HTML5",
    slug: "html5",
    color: "#E34F26",
  }, 
  {
    name: "CSS3",
    slug: "css3",
    color: "#1572B6",
  }, 
  {
    name: "JavaScript",
    slug: "javascript",
    color: "#F7DF1E",
  }, 
  {
    name: "TypeScript",
    slug: "typescript",
    color: "#3178C6",
  }, 
  {
    name: "Node.js",
    slug: "node.js",
    color: "#339933",
  }, 
  {
    name: "NPM",
    slug: "npm",
    color: "#CB3837",
  }, 
  {
    name: "React",
    slug: "react",
    color: "#61DAFB",
  }, 
  {
    name: "Redux",
    slug: "redux",
    color: "#764ABC",
  }, 
  {
    name: "TailwindCSS",
    slug: "tailwindcss",
    color: "#06B6D4",
  }, 
  {
    name: "Styled components",
    slug: "styledcomponents",
    color: "#DB7093",
  }, 
  {
    name: "Bootstrap",
    slug: "bootstrap",
    color: "#7952B3",
  }, 
  {
    name: "NextJS",
    slug: "nextdotjs",
    color: "#000000",
  }, 
  {
    name: "Gatsby",
    slug: "gatsby",
    color: "#663399",
  }, 
  {
    name: "Express.js",
    slug: "express",
    color: "#000000",
  }, 
  {
    name: "GraphQL",
    slug: "graphql",
    color: "#E10098",
  }, 
  {
    name: "Mocha",
    slug: "mocha",
    color: "#8D6748",
  }, 
  {
    name: "Chai",
    slug: "chai",
    color: "#A30701",
  }, 
  {
    name: "Swagger",
    slug: "swagger",
    color: "#85EA2D",
  }, 
  {
    name: "Vercel",
    slug: "vercel",
    color: "#000000",
  }, 
  {
    name: "Railway",
    slug: "railway",
    color: "#0B0D0E",
  }, 
  {
    name: "Render",
    slug: "render",
    color: "#46E3B7",
  }, 
  {
    name: "Netlify",
    slug: "netlify",
    color: "#00C7B7",
  }, 
  {
    name: "MongoDB",
    slug: "mongodb",
    color: "#47A248",
  }, 
  {
    name: "PostgreSQL",
    slug: "postgresql",
    color: "#4169E1",
  }, 
  {
    name: "Git",
    slug: "git",
    color: "#F05032",
  }, 
  {
    name: "Figma",
    slug: "figma",
    color: "#F24E1E",
  }
];

export const projects = [
  {
    name: "Portfolio",
    description: "Este sitio que estás viendo en pantalla. Mi portfolio personal donde iré mostrando mis habilidades, experiencias y proyectos; siempre intentando seguir un diseño UI/UX agradable, responsive y fiel a mi estilo.",
    thumbnail: "portfolio.png",
    tech: ["node.js", "react", "css3", "tailwindcss", "styledcomponents", "typescript", "nextdotjs", "figma"],
    status: "Activo",
    type: "Proyecto personal",
    repo: "https://github.com/laura-e24/portfolio",
    deploy: null,
    date: "Febrero 2023 ─ actualidad"
  },
  {
    name: "Marvel's Characters App",
    description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
    thumbnail: "bsmart.png",
    tech: ["node.js", "react", "css3", "styledcomponents", "figma"],
    status: "Terminado",
    type: "Prueba técnica",
    repo: "https://github.com/laura-e24/BSMART-frontend-challenge",
    deploy: null,
    date: "Abril 2023"
  }, 
  {
    name: "Thumbnail Generator",
    description: "API REST que recibe una imagen PNG o JPEG cargada desde el ordenador y a partir de ella genera tres thumbnails con distintos tamaños, los guarda en el ordenador y retorna las URLs de donde se almacenaron.",
    thumbnail: "thumbnailgen.png",
    tech: ["node.js", "typescript", "express", "swagger", "mocha"],
    status: "Terminado",
    type: "Prueba técnica",
    repo: "https://github.com/laura-e24/proof-of-concept",
    deploy: null,
    date: "Marzo 2023"
  },
  {
    name: "FormatCSV App",
    description: "Extrae datos en formato CSV de API externa, la formatea a JSON y el resultado es mostrado en pantalla en formato tabla con diseño sencillo y minimalista. REST API con testing y documentación.",
    thumbnail: "formatcsv.png",
    tech: ["node.js", "react", "css3", "bootstrap", "express", "mocha", "swagger"],
    status: "Terminado",
    type: "Prueba técnica",
    repo: "https://github.com/laura-e24/formatCSV-app",
    deploy: null,
    date: "Enero 2023"
  }, 
  {
    name: "La Dionisia",
    description: "Vinoteca online — ecommerce — con un amplio catálogo de distintos vinos traídos de API propia construida con PHP y MySQL. Incluye múltiples filtros y ordenamientos combinados, registro y auntenticación, guardado de favoritos, plataforma de pago que admite PayPal y tarjetas de crédito/débito, y rol de administrador para gestionar la tienda. UI/UX totalmente responsive, agradable y con múltiples funcionalidades de accesibilidad.",
    thumbnail: "dionisia.png",
    tech: ["node.js", "react", "typescript", "nextdotjs", "express", "css3", "tailwindcss", "redux", "postgresql", "auth0", "stripe", "figma", "php", "mysql"],
    status: "Terminado",
    type: "Proyecto académico grupal",
    repo: "https://github.com/laura-e24/LaDionisiaFront",
    deploy: "https://la-dionisia-front.vercel.app",
    date: "Enero 2023"
  }, 
  {
    name: "Henry Countries",
    description: "Extrae de una API externa y guarda en base de datos la información de los países del mundo, permitiendo ver todos sus detalles y gestionar actividades turísticas; creando, editando y eliminándolas. Incluye búsqueda y múltiples filtros y ordenamientos combinados para facilitar la selección de países.",
    thumbnail: "PI.png",
    tech: ["node.js", "react", "express", "css3", "styledcomponents", "redux", "postgresql", "figma"],
    status: "Activo",
    type: "Proyecto académico",
    repo: "https://github.com/laura-e24/PI-Countries",
    deploy: "https://henrycountries.vercel.app",
    date: "Noviembre ─ diciembre 2022"
  }, 
  {
    name: "Cotizador de seguros de automóviles",
    description: "Aplicación sencilla que simula un cotizador de seguro para automóviles, pudiendo elegir marca y año del auto y tipo de seguro deseado, para luego calcular el precio según las especificaciones seleccionadas.",
    thumbnail: "cotizador.png",
    tech: ["node.js", "react", "css3", "skeleton"],
    status: "Terminado",
    type: "Proyecto académico (curso)",
    repo: null,
    deploy: "https://cotizadorsegurosreact-laura-e24.netlify.app",
    date: "2021"
  },
  {
    name: "Calculadora de presupuesto",
    description: "Sencilla calculadora para llevar registro de nuestro presupuesto y gastos. UI/UX simple e intuitiva.",
    thumbnail: "presupuesto.png",
    tech: ["node.js", "react", "css3", "skeleton"],
    status: "Terminado",
    type: "Proyecto académico (curso)",
    repo: null,
    deploy: "https://calcularpresupuestoreact-laura-e24.netlify.app",
    date: "2021"
  }
]