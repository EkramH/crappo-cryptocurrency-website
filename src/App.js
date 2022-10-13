import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import NavMobile from "./components/header/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/calculate/Calculate";
import Trade from "./components/Trade";
import Features from "./components/features/Features";

function App() {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
    </div>
  );
}

export default App;
