import React from "react";
import Router from "./Router";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
