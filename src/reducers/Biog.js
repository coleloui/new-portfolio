const Biog = (state = true, action) => {
  switch (action.type) {
    case "Biog":
      return !state;
    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default Biog;
