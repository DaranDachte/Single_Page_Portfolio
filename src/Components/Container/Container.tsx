import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";

const Container = () => {
  return (
    <div className="w-[110rem] h-full my-[5rem]  mx-auto shadow-[0px_-15px_50px_-12px] shadow-sky-200  bg-[#151515] ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Container;
