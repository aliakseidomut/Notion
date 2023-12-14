import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as userReducer } from "./user/reducer"; 
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { reducer as notesReducer } from "./notes/reducer";
import persistStore from "redux-persist/es/persistStore";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer,
    notes: notesReducer
});

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
export const persistor = persistStore(store);