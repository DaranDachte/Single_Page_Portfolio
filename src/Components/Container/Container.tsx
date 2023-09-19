import Contact from "./Contact/Contact";
import Greeting from "./Greeting/Greeting";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import TitleFooter from "./TitleFooter/TitleFooter";

const Container = () => {
  return (
    <div>
      <TitleFooter />
      <Greeting />
      <Skills />
      <Projects />
      <Contact />
      <TitleFooter />
    </div>
  );
};

export default Container;
