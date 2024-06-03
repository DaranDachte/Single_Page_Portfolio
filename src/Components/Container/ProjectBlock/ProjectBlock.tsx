import { useState } from "react";
import Modal from "../../Modal/Modal";
interface ProjectBlockTypes {
  imgSrc: string;
  description: string;
  technologies: string;
  id: number;
  name: string;
  screenShots: string[];
  projectLink: string;
  codeLink: string;
}

export const ProjectBlock: React.FC<ProjectBlockTypes> = ({
  imgSrc,
  description,
  technologies,
  id,
  name,
  screenShots,
  projectLink,
  codeLink,
}) => {
  const [openModal, setOpenModal] = useState(false);
  function openModalFun() {
    setOpenModal(true);
  }
  function closeModalFun() {
    setOpenModal(false);
  }

  return (
    <div className="lg:w-[33.75rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem]   sm:w-[15rem] sm:h-[15rem] group mx-auto my-[2.25rem]  rounded sm:my-[2.25rem] lg:text-[1.25rem] md:text-[1rem] sm:text-[0.5rem]  lg:mb-[1.25rem] md:mb-[3rem] sm:mb-[3rem] ">
      <div className="flex flex-col items-center justify-center absolute opacity-0 group-hover:bg-black/[.85] group-hover:opacity-100 transition-opacity delay-150 lg:w-[33.75rem]  lg:h-[25rem]  md:w-[20rem] md:h-[20rem]   sm:w-[15rem] sm:h-[15rem] lg:text-[1.25rem] md:text-[1rem] sm:text-[0.5rem] ">
        <div className="text-sky-200 lg:p-[1rem] md:p-[1rem] sm:p-[1rem] lg:text-[1.25rem] md:text-[1rem] sm:text-[0.5rem]   ">
          {description}
        </div>
        <div
          onClick={openModalFun}
          className="text-sky-200 p-[1rem] underline cursor-pointer decoration-solid lg:text-[1.25rem] md:text-[1rem] sm:text-[0.5rem] "
        >
          View Screenshots
        </div>
        {openModal && (
          <Modal screenShots={screenShots} closeModal={closeModalFun} />
        )}

        <div className="text-sky-200 lg:text-[1.25rem] md:text-[1rem] sm:text-[0.5rem]  p-[1rem] cursor-pointer underline decoration-solid ">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="text-sky-200 p-[1rem] underline cursor-pointer decoration-solid lg:text-[1.25rem] md:text-[1rem] sm:text-[0.5rem] ">
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
      <img
        className="h-full w-full rounded"
        src={imgSrc}
        alt={`Project ${id}`}
      />
      <div>
        <p className="text-sky-200 text-[1.5rem]">{name}</p>
      </div>
      <div>
        <p className="text-sky-200 font-medium">{technologies}</p>
      </div>
    </div>
  );
};
