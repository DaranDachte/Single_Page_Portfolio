import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Greeting from "./Greeting/Greeting";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Title from "./Title/Title";

const Container = () => {
  return (
    <div className="w-280 ">
      <Title />
      <Greeting />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Container;
