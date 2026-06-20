import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
