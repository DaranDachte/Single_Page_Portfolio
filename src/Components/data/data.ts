import InvoiceAppPreview from "../../assets/img/InvoiceApp/HomePage.jpg";
import JobListingPreview from "../../assets/img/JobListing/Preview.jpg";
import ToDoListPreview from "../../assets/img/ToDoList/Preview.png";
import BookLibraryPreview from "../../assets/img/BookLibraryApp/Preview.jpg";
import TipCalculatorPreview from "../../assets/img/TipCalculator/Preview.jpg";
import AdviceAppPreview from "../../assets/img/AdviceApp/Preview.png";

import InvoiceAppHomePage from "../../assets/img/InvoiceApp/HomePage.jpg";
import InvoiceAppDetails from "../../assets/img/InvoiceApp/Details.jpg";
import InvoiceAppEmptyList from "../../assets/img/InvoiceApp/EmptyList.jpg";

import JobListingHomePage from "../../assets/img/JobListing/HomePage.jpg";
import JobListingAddVacancy from "../../assets/img/JobListing/AddVacancy.jpg";
import JobListingEditVacancy from "../../assets/img/JobListing/EditVacancy.jpg";

import ToDoDayEmpty from "../../assets/img/ToDoList/ToDoDayEmpty.jpg";
import ToDoDayFull from "../../assets/img/ToDoList/ToDoDayFull.png";
import ToDoNightEmpty from "../../assets/img/ToDoList/ToDoNightEmpty.jpg";
import ToDoNightFull from "../../assets/img/ToDoList/ToDoNightFull.jpg";

import HomePage from "../../assets/img/BookLibraryApp/HomePage.jpg";
import HomePage1 from "../../assets/img/BookLibraryApp/HomePage1.jpg";
import HomePageEmpty from "../../assets/img/BookLibraryApp/HomePageEmpty.jpg";
import HomePageFull from "../../assets/img/BookLibraryApp/HomePageFull.jpg";
import Certificate from "../../assets/img/BookLibraryApp/Certificate.jpg";

import LeftSide from "../../assets/img/TipCalculator/leftSide.jpg";
import RightSide from "../../assets/img/TipCalculator/rightSide.jpg";
import Splitter from "../../assets/img/TipCalculator/Splitter.jpg";

import HomePageAdviceApp from "../../assets/img/AdviceApp/HomePage.png";
import Advice1 from "../../assets/img/AdviceApp/Advice1.jpg";
import Advice2 from "../../assets/img/AdviceApp/Advice2.jpg";

export const data = [
  {
    id: 1,
    imgSrc: InvoiceAppPreview,
    description:
      "This app shows a sheet of invoices that you can sort by status and also create a new invoice.  By clicking on the purple corner, you can see the details of each invoice, change its status, edit or delete it. ",
    technologies: "TypeScript, Redux, Tailwind, React",
    name: "Invoice list",
    screenShots: [InvoiceAppHomePage, InvoiceAppDetails, InvoiceAppEmptyList],
    projectLink: "https://invoice-app-iota-peach.vercel.app/",
    codeLink: "https://github.com/DaranDachte/Invoice_App",
  },
  {
    id: 2,
    imgSrc: JobListingPreview,
    description:
      "This app, in which I used Redux, shows you a set of jobs that you can delete or edit at will. You can also add a new job, with all the necessary attributes. ",
    technologies: "TypeScript, Redux, Tailwind, React",
    name: "Job listings with add and edit forms ",
    screenShots: [
      JobListingHomePage,
      JobListingEditVacancy,
      JobListingAddVacancy,
    ],
    projectLink: "https://job-listings-with-add-and-edit-forms.vercel.app/",
    codeLink:
      "https://github.com/DaranDachte/Job_listings_with_add_and_edit_forms",
  },
  {
    id: 3,
    imgSrc: ToDoListPreview,
    description:
      "Every Junior must have a Todo List in their portfolio. I decided not to be an exception and created my own Todo List. Here you can sort your to-do's by several parameters and also switch to night or day themes.",
    technologies: "TypeScript, Context API, SCSS, React",
    name: "ToDo List",
    screenShots: [ToDoDayEmpty, ToDoDayFull, ToDoNightEmpty, ToDoNightFull],
    projectLink: "https://to-do-list-30cn495my-darandachte.vercel.app/",
    codeLink: "https://github.com/DaranDachte/ToDoList",
  },
  {
    id: 4,
    imgSrc: BookLibraryPreview,
    description:
      "This project is about learning the Redux state manager, and is taken from a course that was created by Bogdan Stashchuk. You can see the certificate of completion for this course in the screenshots section",
    technologies: "TypeScript, Redux, CSS, React",
    name: "Book Library",
    screenShots: [
      HomePage,
      HomePage1,
      HomePageEmpty,
      HomePageFull,
      Certificate,
    ],
    projectLink: "",
    codeLink: "https://github.com/DaranDachte/Book_Library_App-LearnRedux",
  },
  {
    id: 5,
    imgSrc: TipCalculatorPreview,
    description:
      "Have you gone to a restaurant and are trying to figure out how much you should tip? Use this simple but reliable app to figure it out. ",
    technologies: "TypeScript, CSS, React, Vite-plugin-svgr",
    name: "Tip calculator",
    screenShots: [LeftSide, RightSide, Splitter],
    projectLink: "https://tip-calculator-lake-alpha.vercel.app/",
    codeLink: "https://github.com/DaranDachte/Tip_Calculator",
  },
  {
    id: 6,
    imgSrc: AdviceAppPreview,
    description:
      "In this simple application, I was interested to work on building the API again, to use the useState and useEffect hooks",
    technologies: "TypeScript, SCSS, React",
    name: "Advice generator",
    screenShots: [HomePageAdviceApp, Advice1, Advice2],
    projectLink: "https://advice-generator-lr8z.vercel.app",
    codeLink: "https://github.com/DaranDachte/Advice_generator",
  },
];
