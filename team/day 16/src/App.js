import React, { useState } from "react";
import Router from "./Router";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Search from "./components/Search";

function App() {
  // const [searchText, setSearchText] = useState();
  // const getSearchText = (text) => {
  //   console.log(text);
  //   setSearchText(text);
  // };

  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
      <Router />
      <Footer />
    </div>
  );
}

export default App;
