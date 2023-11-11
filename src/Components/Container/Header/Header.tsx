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
          <div className="flex flex-col items-center group">
            <img
              src={Html}
              alt="html"
              className=" w-[4rem] transition ease-in-out delay-150 group-hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">HTML 5</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={Css}
              alt="css"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300"
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">CSS</p>
            </div>
          </div>

          <div className="flex flex-col items-center group">
            <img
              src={Sass}
              alt="Sass"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">SCSS</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={Tailwind}
              alt="tailwind"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">TAILWIND</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={JavaScript}
              alt="javaScript"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">JavaScript</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={TypeScript}
              alt="TypeScript"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">TypeScript</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={React}
              alt="react"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300  "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">REACT</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={Redux}
              alt="css"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">REDUX</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={MongoDB}
              alt="mongoDB"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">MongoDB</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={NodeJS}
              alt="nodeJS"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">Node.js</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={GitHub}
              alt="mui"
              className="w-[4rem] transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">GitHub</p>
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={myFoto}
              alt="css"
              className="w-[4rem] rounded transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5]  hover:scale-110 duration-300 "
            />
            <div className=" opacity-0 group-hover:opacity-100 transition-opacity delay-150 flex items-center justify-center">
              <p className="text-sky-200">IT'S ME</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex align-center justify-between items-start w-440 h-[15rem] px-[1rem] ">
        <div>
          <h2 className="text-sky-200 text-4xl mb-[1rem]">
            Nice to meet you! I'm DaranDachte
          </h2>
          <p className="text-sky-200 text-3xl">
            Based in the West Germany, I'm a front-end developer passionate
            about building accessible web apps that users love.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
