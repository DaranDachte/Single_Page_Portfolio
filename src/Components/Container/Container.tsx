import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Header from "./Header/Header";

const Container = () => {
  return (
    <div className="w-[100rem] h-full my-0 mx-auto border bg-[#151515]  ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Container;
