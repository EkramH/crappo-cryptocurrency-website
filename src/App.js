import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";

function App() {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="fixed z-10 top-0 h-full transition-all duration-200">
        <NavMobile />
      </div>
    </div>
  );
}

export default App;
