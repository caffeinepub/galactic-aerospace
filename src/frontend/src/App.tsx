import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Innovations from "./components/Innovations";
import Missions from "./components/Missions";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: "#050a1a" }}>
      {/* Fixed animated galaxy background */}
      <GlobalBackground />

      {/* Sticky header */}
      <Header />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Innovations />
        <Portfolio />
        <Missions />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
