import Benefits from "./components/Benefits/Benefits";
import FAQ from "./components/FAQs/FAQ";
import Guide from "./components/Hero/Guide";
import Hero from "./components/Hero/Hero";
import MainNavbar from "./components/Navbars/MainNavbar";
import TopNavbar from "./components/Navbars/TopNavbar";
import Support from "./components/Support/Support";

const App = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <div className="flex flex-col items-center min-h-screen">
        <Hero />
        <Guide />
        <Benefits />
        <FAQ />
        <Support />
      </div>
    </>
  );
};

export default App;
