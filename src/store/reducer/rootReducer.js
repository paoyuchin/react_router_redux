import toDoListReducer from './toDoListReducer';
import {
  combineReducers
} from "redux";

const rootReducer = combineReducers({
  toDoList: toDoListReducer,
});

export default rootReducer;
