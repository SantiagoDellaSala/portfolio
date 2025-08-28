import MainNavbar from "./components/MainNavbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <MainNavbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
