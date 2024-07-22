import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Courses from "./Components/Courses";
import Informations from "./Components/Informations";
import LatestCources from "./Components/Latest-Cources";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";




function App() {
  return (
    <>
      <Header />
      <Main />
      <Courses />
      <Informations />
      <LatestCources />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
