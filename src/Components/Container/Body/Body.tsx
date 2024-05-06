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
      <div className="flex justify-between items-center mt-40">
        <h2 className="text-sky-200 text-[3rem] ml-[8rem]  ">
          Projects (hover for details)
        </h2>
        <a
          href="mailto:darandachte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-sky-200 text-[1.5rem] mr-[8rem]">Contact Me</div>
        </a>
      </div>
      <div>
        <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-none ml-[8rem]  ">
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
