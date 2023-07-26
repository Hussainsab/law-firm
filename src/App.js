import "./App.css";
import CardSection from "./components/CardSection/CardSection";
import CommentSection from "./components/CommentSection/CommentSection";
import HeroSection from "./components/HeroSection/HeroSection";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <CardSection />
      <PhotoGrid />
      <CommentSection />
    </div>
  );
}

export default App;
