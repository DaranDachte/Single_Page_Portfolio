import TitleFooter from "../TitleFooter/TitleFooter";
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
import myFoto from "../../../assets/img/myFoto.jpg";
const Header = () => {
  return (
    <>
      <div className="mt-4">
        <TitleFooter />
        <div className="grid gap-4 grid-cols-12 mt-6 ">
          <div className="flex flex-col">
            <img
              src={Html}
              alt="html"
              className=" w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p>Text</p>
            </div>
          </div>

          <img
            src={Css}
            alt="css"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300"
          />
          <img
            src={Sass}
            alt="Sass"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={Tailwind}
            alt="tailwind"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={JavaScript}
            alt="javaScript"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={TypeScript}
            alt="TypeScript"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={React}
            alt="react"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300  "
          />
          <img
            src={Redux}
            alt="css"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={MongoDB}
            alt="mongoDB"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={NodeJS}
            alt="nodeJS"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={Mui}
            alt="mui"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
          <img
            src={GitHub}
            alt="css"
            className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
          />
        </div>
      </div>

      <div className=" flex align-center justify-between items-start w-440 h-[15rem] px-[1rem] ">
        <div>
          <h2>Nice to meet you! I'm DaranDachte</h2>
          <p>
            Based in the West Germany, I'm a front-end developer passionate
            about building accessible web apps that users love.
          </p>
          <form action="#contact">
            <button>Contact</button>
          </form>
        </div>

        <div className="w-[10rem]   ">
          <img src={myFoto} alt="myFoto" className="rounded"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
