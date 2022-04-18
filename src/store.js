import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./frontend/reducers";

const store = createStore(rootReducer);

export { store };
