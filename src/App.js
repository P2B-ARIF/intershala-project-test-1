import "./App.css";
import About from "./Components/About/About";
import Choose from "./Components/Choose/Choose";
import Faq from "./Components/Faq/Faq";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Started from "./Components/Started/Started";
import Teacher from "./Components/Teacher/Teacher";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Teacher />
      <About />
      <h1 className="container mx-auto text-2xl font-bold my-5">
        How It Works
      </h1>
      <Works />
      <Choose />
      <Started />
      <Faq />
    </div>
  );
}

export default App;
