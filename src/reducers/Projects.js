const Projects = (state = false, action) => {
  switch (action.type) {
    case "Projects":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default Projects;
