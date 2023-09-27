import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";

const Container = () => {
  return (
    <div className="w-[100rem] h-full my-0 mx-auto border border-sky-500 ">
      <Header />

      <Body />
      <Contact />
      <Footer />
    </div>
  );
};

export default Container;
