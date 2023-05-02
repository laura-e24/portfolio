export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const techFullName = (technology: string) => {
  switch (technology) {
    case "html":
      return "HTML";

    case "css3":
      return "CSS"

    case "tailwind":
      return "TailwindCSS"

    case "styledcomponents":
      return "Styled Components"

    case "nextdotjs":
      return "NextJS"

    case "express":
      return "Express.js"

    case "mongodb":
      return "MongoDB"

    case "postgresql":
      return "PostgreSQL"

    default:
      return capitalize(technology)
  }
}