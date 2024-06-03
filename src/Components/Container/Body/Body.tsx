import { useState } from "react";
import { ProjectBlock } from "../ProjectBlock/ProjectBlock";
import { reactData } from "../../data/reactData";
import { vueData } from "../../data/vueData";
import { nuxtData } from "../../data/nuxtData";

const Body = () => {
  const reactTab = "reactTab";
  const vueTab = "vueTab";
  const nuxtTab = "nuxtTab";
  const [activeTab, setActiveTab] = useState(reactTab);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center sm:mt-60  md:mt-40   lg:mt-40 mb-8 md:mb-12 px-4 md:px-0">
        <h2 className="text-sky-200 text-lg md:text-xl lg:text-2xl mb-4  md:mb-0 md:ml-[8rem]">
          Projects (hover for details)
        </h2>
        <a
          href="mailto:darandachte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-sky-200 text-lg md:text-xl lg:text-2xl md:mr-[8rem]">
            Contact Me
          </div>
        </a>
      </div>

      <div>
        <div className="flex flex-wrap text-sm sm:text-base md:text-lg lg:mx-25 lg:text-xl font-medium text-center text-gray-500 border-none ml-4 sm:mx-[8rem] sm:ml-[8rem]  ">
          <button
            onClick={() => {
              setActiveTab(reactTab);
            }}
            className={`${
              activeTab === reactTab ? "text-[4rem] " : ""
            }inline-block p-4  bg-gray-100 rounded-lg cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2`}
            type="button"
          >
            React
          </button>

          <button
            onClick={() => {
              setActiveTab(vueTab);
            }}
            className={`${
              activeTab === vueTab ? "text-[4rem] " : ""
            }inline-block p-4  bg-gray-100 rounded-lg cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2`}
            type="button"
          >
            Vue
          </button>
          <button
            onClick={() => {
              setActiveTab(nuxtTab);
            }}
            className={`${
              activeTab === nuxtTab ? "text-[4rem] " : ""
            }inline-block p-4  bg-gray-100 rounded-lg cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2`}
            type="button"
          >
            Nuxt
          </button>
        </div>

        <div>
          {activeTab === reactTab && (
            <div className="grid grid-cols-2 gap-4">
              {reactData.map((project) => (
                <ProjectBlock key={project.id} {...project} />
              ))}
            </div>
          )}

          {activeTab === vueTab && (
            <div className="grid grid-cols-2 gap-4">
              {vueData.map((project) => (
                <ProjectBlock key={project.id} {...project} />
              ))}
            </div>
          )}

          {activeTab === nuxtTab && (
            <div className="grid grid-cols-2 gap-4">
              {nuxtData.map((project) => (
                <ProjectBlock key={project.id} {...project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
