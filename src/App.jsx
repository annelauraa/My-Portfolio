import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./component/Loading";
import Portfolio from "./component/Portfolio";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Après 10 secondes, la page de chargement disparaît
    }, 10000);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoading ? <Loading /> : <Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
