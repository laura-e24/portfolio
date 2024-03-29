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
    color: "#897900",
  }, 
  {
    name: "TypeScript",
    slug: "typescript",
    color: "#3178C6",
  }, 
  {
    name: "Node.js",
    slug: "node.js",
    color: "#154E16",
  }, 
  {
    name: "NPM",
    slug: "npm",
    color: "#CB3837",
  }, 
  {
    name: "React",
    slug: "react",
    color: "#0170FE",
  }, 
  {
    name: "Redux",
    slug: "redux",
    color: "#764ABC",
  }, 
  {
    name: "TailwindCSS",
    slug: "tailwindcss",
    color: "#3178C6",
  }, 
  {
    name: "Styled components",
    slug: "styledcomponents",
    color: "#CB3164",
  }, 
  {
    name: "Bootstrap",
    slug: "bootstrap",
    color: "#7952B3",
  }, 
  {
    name: "Ant Design",
    slug: "antdesign",
    color: "#0170FE",
  },
  {
    name: "Material UI",
    slug: "mui",
    color: "#007FFF",
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
    color: "#58402D",
  }, 
  {
    name: "Chai",
    slug: "chai",
    color: "#A30701",
  }, 
  {
    name: "Swagger",
    slug: "swagger",
    color: "#154E16",
  }, 
  {
    name: "MongoDB",
    slug: "mongodb",
    color: "#154E16",
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
    thumbnail: async () => {
      const res = await import("../../public/projects/portfolio.png")
      return res.default.src
    },
    tech: ["node.js", "react", "css3", "tailwindcss", "styledcomponents", "typescript", "nextdotjs", "figma"],
    status: "Activo",
    type: "Proyecto personal",
    repo: "https://github.com/laura-e24/portfolio",
    deploy: null,
    date: "Febrero 2023 ─ Mayo 2023"
  },
  {
    name: "Marvel's Characters App",
    description: "Listado de personajes de Marvel utilizando su REST API. UI/UX responsive e intuitiva y adaptado al diseño de la página oficial de Marvel.",
    thumbnail: async () => {
      const res = await import("../../public/projects/bsmart.png")
      return res.default.src
    },
    tech: ["node.js", "react", "css3", "styledcomponents", "figma"],
    status: "Terminado",
    type: "Prueba técnica",
    repo: "https://github.com/laura-e24/BSMART-frontend-challenge",
    deploy: "https://marvelscharacters.vercel.app",
    date: "Abril 2023"
  }, 
  {
    name: "Thumbnail Generator",
    description: "API REST que recibe una imagen PNG o JPEG cargada desde el ordenador y a partir de ella genera tres thumbnails con distintos tamaños, los guarda en el ordenador y retorna las URLs de donde se almacenaron.",
    thumbnail: async () => {
      const res = await import("../../public/projects/thumbnailgen.png")
      return res.default.src
    },
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
    thumbnail: async () => {
      const res = await import("../../public/projects/formatcsv.png")
      return res.default.src
    },
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
    thumbnail: async () => {
      const res = await import("../../public/projects/dionisia.png")
      return res.default.src
    },
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
    thumbnail: async () => {
      const res = await import("../../public/projects/PI.png")
      return res.default.src
    },
    tech: ["node.js", "vite", "react", "express", "css3", "styledcomponents", "redux", "postgresql", "figma"],
    status: "Activo",
    type: "Proyecto académico",
    repo: "https://github.com/laura-e24/PI-Countries",
    deploy: "https://henrycountries.vercel.app",
    date: "Noviembre ─ diciembre 2022"
  }, 
  {
    name: "UpTask",
    description: "Admistrador de proyectos y tareas. Permite crearnos una cuenta con email y contraseña, validando los datos para la autenticación mediante JSON Web Token, pudiendo además restablecer la clave en caso de olvidarla. Al mismo tiempo, cada vez que registremos una cuenta nueva o queramos restablecer la contraseña, nos llegará un mail para confirmar el cambio. Permite crear tantos proyectos como queramos, con tantas tareas como queramos; pudiendo editarlas, eliminarlas o marcarlas como completadas. A su vez, se pueden agregar varios colaboradores a los proyectos, de modo que sólo quienes tengan acceso al mismo podrán verlo e interactuar con él.",
    thumbnail: async () => {
      const res = await import("../../public/projects/uptask.png")
      return res.default.src
    },
    tech: ["node.js", "react", "typescript", "vite", "express", "css3", "tailwindcss", "redux", "mongodb", "jsonwebtokens"],
    status: "En curso",
    type: "Proyecto académico (curso)",
    repo: "https://github.com/laura-e24/UpTask",
    deploy: null,
    date: "2022 ─ actualidad"
  }, 
  {
    name: "Cotizador de seguros de automóviles",
    description: "Aplicación sencilla que simula un cotizador de seguro para automóviles, pudiendo elegir marca y año del auto y tipo de seguro deseado, para luego calcular el precio según las especificaciones seleccionadas.",
    thumbnail: async () => {
      const res = await import("../../public/projects/cotizador.png")
      return res.default.src
    },
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
    thumbnail: async () => {
      const res = await import("../../public/projects/presupuesto.png")
      return res.default.src
    },
    tech: ["node.js", "react", "css3", "skeleton"],
    status: "Terminado",
    type: "Proyecto académico (curso)",
    repo: null,
    deploy: "https://calcularpresupuestoreact-laura-e24.netlify.app",
    date: "2021"
  }
]
