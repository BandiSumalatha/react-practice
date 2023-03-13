import { createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-store',
    storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=createStore(persistedReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor1=persistStore(store)
export default store; 













//redux persist is a library that allows to save redux store in loacal storage