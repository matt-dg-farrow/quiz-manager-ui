import React from "react";
import "./App.css";
import LoginPage from "../features/loginPage";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/all.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
