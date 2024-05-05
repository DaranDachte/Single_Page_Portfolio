import InvoiceAppPreview from "../../assets/img/InvoiceApp/HomePage.jpg";
import JobListingPreview from "../../assets/img/JobListing/Preview.jpg";
import ToDoListPreview from "../../assets/img/ToDoList/Preview.png";
import BookLibraryPreview from "../../assets/img/BookLibraryApp/Preview.jpg";
import TipCalculatorPreview from "../../assets/img/TipCalculator/Preview.jpg";
import AdviceAppPreview from "../../assets/img/AdviceApp/Preview.png";
import eCommerceAppPreview from "../../assets/img/eCommerce/Preview.jpg";
import RainPreview from "../../assets/img/JustAnotherRain/Preview.jpg";
import GitSearchPreview from "../../assets/img/GitSearchApp/Preview.jpg";
import CountriesOfTheWorldPreview from "../../assets/img/CountriesOfTheWorld/Preview.jpg";

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

import HomePageE from "../../assets/img/eCommerce/HomePage.jpg";
import Search from "../../assets/img/eCommerce/Search.jpg";
import Item from "../../assets/img/eCommerce/Item.jpg";
import Basket from "../../assets/img/eCommerce/Basket.jpg";
import Contact from "../../assets/img/eCommerce/Contact.jpg";

import Clouds from "../../assets/img/JustAnotherRain/Clouds.jpg";
import Title from "../../assets/img/JustAnotherRain/Title.jpg";
import HomePageRain from "../../assets/img/JustAnotherRain/HomePage.jpg";
import Gallery from "../../assets/img/JustAnotherRain/Gallery.jpg";
import Gallery1 from "../../assets/img/JustAnotherRain/Gallery1.jpg";
import TestAndNews from "../../assets/img/JustAnotherRain/TestAndNews.jpg";

import DefaultDay from "../../assets/img/GitSearchApp/DefaultDay.jpg";
import SearchNight from "../../assets/img/GitSearchApp/SearchNight.jpg";
import NoResult from "../../assets/img/GitSearchApp/NoResults.jpg";

import NightTheme from "../../assets/img/CountriesOfTheWorld/NightTheme.jpg";
import LearnMore from "../../assets/img/CountriesOfTheWorld/LearnMore.jpg";
import LearnMoreNight from "../../assets/img/CountriesOfTheWorld/LearnMoreNight.jpg";
import NoMatches from "../../assets/img/CountriesOfTheWorld/NoMatches.jpg";

export const reactData = [
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
    imgSrc: CountriesOfTheWorldPreview,
    description:
      "Using this app you can easily find the country you want, get the information you need about that country, and filter countries by region.  In this application I used Context API as well as Redux state manager. ",
    technologies: "TypeScript, Context API, Redux, SCSS, React",
    name: "Countries of The World",
    screenShots: [
      CountriesOfTheWorldPreview,
      NightTheme,
      LearnMore,
      LearnMoreNight,
      NoMatches,
    ],
    projectLink: "https://countries-of-the-world-fr5x.vercel.app/",
    codeLink: "https://github.com/DaranDachte/Countries_of_the_World",
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
  {
    id: 7,
    imgSrc: eCommerceAppPreview,
    description:
      "Application simulating the work of a standard online shop, where you can search, select and put in the basket of your favourite product. This app is made using the  React library  Mantine.  ",
    technologies: "JavaScript, Mantine, React",
    name: "E-Commerce",
    screenShots: [HomePageE, Search, Item, Basket, Contact],
    projectLink: "https://main--timely-peony-f0a59f.netlify.app/",
    codeLink: "https://github.com/DaranDachte/e-commerce",
  },
  {
    id: 8,
    imgSrc: RainPreview,
    description:
      "This is my graduation project. In it I tried to create a website to support refugees. The peculiarity of this project is that it combines elements of informational and visual assistance.  ",
    technologies: "JavaScript, React, More than 10 libraries",
    name: "Just another Rain",
    screenShots: [Clouds, Title, HomePageRain, Gallery, Gallery1, TestAndNews],
    projectLink: "https://just-another-rain-client.onrender.com/",
    codeLink: "https://github.com/DaranDachte/Just-another-Rain",
  },
  {
    id: 9,
    imgSrc: GitSearchPreview,
    description:
      "Using this application you can quickly and easily find the right account on gitHub. You also get some personal data that the user has specified on their account. ",
    technologies: "TypeScript, Context API, Styled components, React",
    name: "gitHub user search app",
    screenShots: [GitSearchPreview, DefaultDay, SearchNight, NoResult],
    projectLink: "https://git-hub-user-search-app-orcin.vercel.app/",
    codeLink: "https://github.com/DaranDachte/gitHub_user_search_app",
  },
  {
    id: 10,
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
];
