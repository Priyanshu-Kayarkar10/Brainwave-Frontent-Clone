import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Opener from "./components/Opener";

const App = () => {

  return (
    <>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      <ButtonGradient />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
};

export default App;
