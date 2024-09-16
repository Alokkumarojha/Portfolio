import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Header/Index";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
