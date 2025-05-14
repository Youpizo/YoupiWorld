import Card from "../../components/Card/Card.js";
import HeroSection from "../../components/HeroSection/HeroSection.js";
import Header from '../../components/Header/Header.js';
import "./Home.css"


const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
      <Card />
      <HeroSection />
      </div>
    </>
  );
};

export default HomePage;