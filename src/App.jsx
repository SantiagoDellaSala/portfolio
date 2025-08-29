import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <>
      <MainNavbar />
      <main>
        <Hero />
        <Services onSelectPlan={setSelectedPlan} />
        <Portfolio />
        <Contact selectedPlan={selectedPlan} />
      </main>
    </>
  );
}

export default App;
