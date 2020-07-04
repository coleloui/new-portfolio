const Contacter = (state = false, action) => {
  switch (action.type) {
    case "Contacter":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default Contacter;
