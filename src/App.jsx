import React, { useState, useEffect } from "react";
import { Navbar, ScrollTop } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Error, About } from "./pages";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <Navbar />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Error />} path="*" />
      </Routes>
      <ScrollTop />
    </Router>
  );
};

export default App;
