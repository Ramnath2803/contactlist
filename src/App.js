import React from "react";
import "./App.css";

import Header from "./Component/Header/header";
import Footer from "./Component/footer/footer";
import Notes from "./Component/Notes/notes";

function App() {
  return (
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
