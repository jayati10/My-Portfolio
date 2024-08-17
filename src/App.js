import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import LinkSocial from "./components/LinkSocial";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <LinkSocial />
    </div>
  );
}

export default App;
