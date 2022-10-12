import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
