import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaines from "components/Campaines";
import Favorie from "components/Favorie";
import MobileApp from "components/MobileApp";
import Card from "components/Card";
import Footter from "components/Footter";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaines />
      <div className="container mx-auto">
        <Favorie />
        <MobileApp />
        <Card />
      </div>
      <Footter />
    </>
  );
}

export default App;
