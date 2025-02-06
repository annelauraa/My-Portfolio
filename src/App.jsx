import "./App.css";
import Portfolio from "./component/Portfolio";
import { useState, useEffect } from "react";
import Loading from "./component/Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Après 3 secondes, la page de chargement se termine
    }, 10000);
  }, []);
  return <div className="App">{isLoading ? <Loading /> : <Portfolio />}</div>;
}

export default App;
