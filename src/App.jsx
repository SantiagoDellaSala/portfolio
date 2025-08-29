import { useState } from "react";
import MainNavbar from "./components/MainNavbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  // Estado para guardar el plan seleccionado
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <>
      <MainNavbar />
      <main>
        {/* Hero inicial */}
        <Hero />

        {/* Sección de servicios */}
        <Services onSelectPlan={setSelectedPlan} />

        {/* Portfolio de proyectos */}
        <Portfolio />

        {/* Contacto con mensaje automático según plan */}
        <Contact selectedPlan={selectedPlan} />
      </main>
    </>
  );
}

export default App;
