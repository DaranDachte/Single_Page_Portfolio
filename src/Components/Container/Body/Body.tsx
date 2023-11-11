import { useState } from "react";
import Modal from "../../Modal/Modal";

import InvoiceAppPreview from "../../../assets/img/InvoiceApp/HomePage.jpg";
import JobListingPreview from "../../../assets/img/JobListing/Preview.jpg";
import ToDoListPreview from "../../../assets/img/ToDoList/Preview.jpg";
import BookLibraryPreview from "../../../assets/img/BookLibraryApp/Preview.jpg";
import TipCalculatorPreview from "../../../assets/img/TipCalculator/Preview.jpg";
import AdviceAppPreview from "../../../assets/img/AdviceApp/Preview.png";

import InvoiceAppHomePage from "../../../assets/img/InvoiceApp/HomePage.jpg";
import InvoiceAppDetails from "../../../assets/img/InvoiceApp/Details.jpg";
import InvoiceAppEmptyList from "../../../assets/img/InvoiceApp/EmptyList.jpg";

import JobListingHomePage from "../../../assets/img/JobListing/HomePage.jpg";
import JobListingAddVacancy from "../../../assets/img/JobListing/AddVacancy.jpg";
import JobListingEditVacancy from "../../../assets/img/JobListing/EditVacancy.jpg";
const projects = [
  {
    id: 1,
    imgSrc: InvoiceAppPreview,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: "Technologies 1",
    name: "Invoice App",
    screenShots: [InvoiceAppHomePage, InvoiceAppDetails, InvoiceAppEmptyList],
  },
  {
    id: 2,
    imgSrc: JobListingPreview,
    description: "Description 2",
    technologies: "Technologies 2",
    name: "Job Listing",
    screenShots: [
      JobListingHomePage,
      JobListingEditVacancy,
      JobListingAddVacancy,
    ],
  },
  {
    id: 3,
    imgSrc: ToDoListPreview,
    description: "Description 3",
    technologies: "Technologies 3",
    name: "Invoice App",
    screenShots: [],
  },
  {
    id: 4,
    imgSrc: BookLibraryPreview,
    description: "Description 4",
    technologies: "Technologies 4",
    name: "Invoice App",
    screenShots: [],
  },
  {
    id: 5,
    imgSrc: TipCalculatorPreview,
    description: "Description 4",
    technologies: "Technologies 4",
    name: "Invoice App",
    screenShots: [],
  },
  {
    id: 6,
    imgSrc: AdviceAppPreview,
    description: "Description 5",
    technologies: "Technologies 5",
    name: "Invoice App",
    screenShots: [],
  },
];

const ProjectBlock = ({
  imgSrc,
  description,
  technologies,
  id,
  name,
  openModalFun,
  screenShots,
  openModal,
  closeModalFun,
}) => (
  <div className="w-[33.75rem] h-[25rem] group mx-auto my-[2rem]  rounded    ">
    <div className="flex flex-col items-center justify-center absolute opacity-0 group-hover:bg-black/[.85] group-hover:opacity-100 transition-opacity delay-150 w-[33.75rem] h-[25rem]">
      <div className="text-sky-200 p-[1rem] text-[1.25rem] ">{description}</div>
      <div
        onClick={openModalFun}
        className="text-sky-200 p-[1rem] underline decoration-solid"
      >
        View Screenshots
      </div>
      {openModal && (
        <Modal screenShots={screenShots} closeModal={closeModalFun} />
      )}

      <div className="text-sky-200 p-[1rem] underline decoration-solid">
        View Project
      </div>
      <div className="text-sky-200 p-[1rem] underline decoration-solid">
        View Code
      </div>
    </div>
    <img className="h-full w-full rounded" src={imgSrc} alt={`Project ${id}`} />
    <div>
      <p className="text-sky-200">{name}</p>
    </div>
    <div>
      <p className="text-sky-200">{technologies}</p>
    </div>
  </div>
);

const Body = () => {
  const [openModal, setOpenModal] = useState(false);
  function openModalFun() {
    setOpenModal(true);
  }
  function closeModalFun() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="flex">
        <h2 className="text-sky-200 text-[3rem]  mx-auto">
          Projects (hover for details)
        </h2>
      </div>
      <div className="grid   grid-cols-2 gap-4  ">
        {projects.map((project) => (
          <ProjectBlock
            key={project.id}
            openModalFun={openModalFun}
            closeModalFun={closeModalFun}
            openModal={openModal}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
