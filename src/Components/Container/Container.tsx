import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";

const Container = () => {
  return (
    <div className="w-full max-w-[110rem] h-full my-5 sm:my-8 md:my-10 lg:my-12 xl:my-16 mx-4 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-auto shadow-[0px_-15px_50px_-12px] shadow-sky-200  bg-[#151515]">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Container;
