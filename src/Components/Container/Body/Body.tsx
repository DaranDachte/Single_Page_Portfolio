//import AppRouter from "../../AppRouter/AppRouter";
import Navigation from "../../Navigation/Navigation";
const Body = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2>Projects</h2>

        <form action="#contact">
          <button>Contact</button>
        </form>
      </div>
      <div className="flex justify-between">
        <Navigation />
      </div>
    </>
  );
};

export default Body;
