import "./App.css";
import CardSection from "./components/CardSection/CardSection";
import CommentSection from "./components/CommentSection/CommentSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import NewLetterSection from "./components/NewLetterSection/NewLetterSection";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import TeamSection from "./components/TeamSection/TeamSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <CardSection />
      <PhotoGrid />
      <CommentSection />
      <TeamSection />
      <FaqSection />
      <NewLetterSection />
      <Footer />
    </div>
  );
}

export default App;
