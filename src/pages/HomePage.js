import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import RoadMap from "../components/RoadMap";
import Tokenomics from "../components/Tokenomics";
import UICloud from "../components/UICloud";

const HomePage = () => {
  return (
    <div className=" overflow-hidden flex flex-col relative bg-color-background-color">
      <div className="bg-container">
        {/* header */}
        <Header />
        {/* HERO */}
        <Hero />
      </div>
      {/* UI CLOUD */}
      <UICloud />
      {/* About Us */}
      <AboutUs />
      {/* TOKENOMICS */}
      <Tokenomics />
      {/* ROADMAP */}
      <RoadMap />
      {/* PARTNERS */}
      <Partners />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
