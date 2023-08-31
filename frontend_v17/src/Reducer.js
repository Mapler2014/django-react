import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const creatRootReducer = history => 
    combineReducers({
        router: connectRouter(history)
    });

export default creatRootReducer;