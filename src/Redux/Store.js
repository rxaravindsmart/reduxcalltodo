import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { DataReducer } from "./Reducer/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
const CReducer = combineReducers({
  CallState: DataReducer,
});
const persistConFig = {
  key: "CallData",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConFig, CReducer);
const configStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
});

const persistor = persistStore(configStore);

export { persistor };
export default configStore;
