import { createStore } from "redux";
import { rootReducer} from "../reducer/index";
// create store
export const store = createStore(
    rootReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export const price = createStore(
//     rootReducer ,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );