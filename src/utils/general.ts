export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const techFullName = (technology: string) => {
  switch (technology) {
    case "html":
      return "HTML";

    case "css":
      return "CSS"

    case "js":
      return "JavaScript"

    case "ts":
      return "TypeScript"

    case "node":
      return "Node.js"

    // case "react":
    //   return "React"

    // case "redux":
    //   return "Redux"

    case "tailwind":
      return "TailwindCSS"

    case "styled":
      return "Styled Components"

    // case "bootstrap":
    //   return "Bootstrap"

    case "next":
      return "NextJS"

    case "express":
      return "Express.js"

    // case "mocha":
    //   return "Mocha"

    // case "swagger":
    //   return "Swagger"

    case "mongodb":
      return "MongoDB"

    case "postgres":
      return "PostgreSQL"

    default:
      return capitalize(technology)
  }
}