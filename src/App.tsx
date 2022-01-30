import React, { FC } from "react";
import AuthContextProvider from "./context/AuthContext";
import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <div className="app">
          <MainRoutes />
        </div>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
