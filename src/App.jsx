import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Error } from "./pages";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<Error />} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
