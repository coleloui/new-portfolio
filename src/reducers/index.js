import { combineReducers } from "redux";
import Biog from "./Biog";
import Contacter from "./Contacter";
import Projects from "./Projects";

const allReducer = combineReducers({
  Biog,
  Projects,
  Contacter,
});

export default allReducer;
