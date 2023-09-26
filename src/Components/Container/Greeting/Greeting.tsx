import Html from "../../../assets/img/html.svg";
import Css from "../../../assets/img/css.svg";
import Sass from "../../../assets/img/sass.svg";
import JavaScript from "../../../assets/img/javascript.svg";
import TypeScript from "../../../assets/img/typescript.svg";
import React from "../../../assets/img/react.svg";
import Redux from "../../../assets/img/redux.svg";
import MongoDB from "../../../assets/img/mongo.svg";
import NodeJS from "../../../assets/img/node.svg";
import Mui from "../../../assets/img/mui.svg";
import Tailwind from "../../../assets/img/tailwind.svg";
import GitHub from "../../../assets/img/github.svg";

const Greeting = () => {
  return (
    <>
      <div className=" flex flex-col justify-evenly items-start w-440 h-[40rem] ">
        <div>
          <h2>Nice to meet you! I'm DaranDachte</h2>
        </div>
        <div>
          <p>
            Based in the West Germany, I'm a front-end developer passionate
            about building accessible web apps that users love.
          </p>
        </div>
        <div>
          <form action="#contact">
            <button>Contact</button>
          </form>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-12 ">
        <img src={Html} alt="html" className=" w-[4rem] hover:w-[8rem] " />
        <img src={Css} alt="css" className="w-[4rem] hover:w-[8rem]" />
        <img
          src={Sass}
          alt="Sass"
          className="w-[4rem] hover:w-[8rem] text:Sass"
        />
        <img
          src={Tailwind}
          alt="tailwind"
          className="w-[4rem] hover:w-[8rem]"
        />
        <img
          src={JavaScript}
          alt="javaScript"
          className="w-[4rem] hover:w-[8rem]"
        />
        <img
          src={TypeScript}
          alt="TypeScript"
          className="w-[4rem] hover:w-[8rem]"
        />
        <img src={React} alt="react" className="w-[4rem] hover:w-[8rem] " />
        <img src={Redux} alt="css" className="w-[4rem] hover:w-[8rem]" />
        <img src={MongoDB} alt="mongoDB" className="w-[4rem] hover:w-[8rem]" />
        <img src={NodeJS} alt="nodeJS" className="w-[4rem] hover:w-[8rem]" />
        <img src={Mui} alt="mui" className="w-[4rem] hover:w-[8rem]" />
        <img src={GitHub} alt="css" className="w-[4rem] hover:w-[8rem]" />
      </div>
    </>
  );
};

export default Greeting;
