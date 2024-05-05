import AdviceAppPreview from "../../assets/img/AdviceApp/Preview.png";
import HomePageAdviceApp from "../../assets/img/AdviceApp/HomePage.png";
import Advice1 from "../../assets/img/AdviceApp/Advice1.jpg";
import Advice2 from "../../assets/img/AdviceApp/Advice2.jpg";

import VueJobL1 from "../../assets/img/VueJobListing/VueJobL1.png";
import VueJobL2 from "../../assets/img/VueJobListing/VueJob2.png";
import VueJobL3 from "../../assets/img/VueJobListing/VueJob3.png";

import Sq1 from "../../assets/img/SimpleQuiz/Sq1.png";
import Sq2 from "../../assets/img/SimpleQuiz/Sq2.png";
import Sq3 from "../../assets/img/SimpleQuiz/Sq3.png";
import Sq4 from "../../assets/img/SimpleQuiz/Sq4.png";

import Ms1 from "../../assets/img/MovieSearch/Ms1.png";
import Ms2 from "../../assets/img/MovieSearch/Ms2.png";
import Ms3 from "../../assets/img/MovieSearch/Ms3.png";
import Ms4 from "../../assets/img/MovieSearch/Ms4.png";

import Nb1 from "../../assets/img/Noteballs/Nb1.png";
import Nb2 from "../../assets/img/Noteballs/Nb2.png";
import Nb3 from "../../assets/img/Noteballs/Nb3.png";
import Nb4 from "../../assets/img/Noteballs/Nb4.png";
import Nb5 from "../../assets/img/Noteballs/Nb5.png";

import Fq1 from "../../assets/img/Frontquiz/Fq1.jpg";
import Fq2 from "../../assets/img/Frontquiz/Fq2.jpg";
import Fq3 from "../../assets/img/Frontquiz/Fq3.jpg";
import Fq4 from "../../assets/img/Frontquiz/Fq4.jpg";
import Fq5 from "../../assets/img/Frontquiz/Fq5.png";

import VueToDo1 from "../../assets/img/Vue3ToDo/1VueToDo.jpg";
import VueToDo2 from "../../assets/img/Vue3ToDo/2VueToDo.jpg";
import VueToDo3 from "../../assets/img/Vue3ToDo/3VueToDo.jpg";

import Pp1 from "../../assets/img/PerPlay/Pp1.png";
import Pp2 from "../../assets/img/PerPlay/Pp2.png";
import Pp3 from "../../assets/img/PerPlay/Pp3.png";

export const vueData = [
  {
    id: 1,
    imgSrc: AdviceAppPreview,
    description:
      "This is a simple application I wrote to improve my knowledge of the Vue framework syntax ",
    technologies: " Vue, TypeScript, Composition API, Tailwind",
    name: "Advice App with Vue 3",
    screenShots: [HomePageAdviceApp, Advice1, Advice2],
    projectLink: "https://vue3-version-advice-generator.vercel.app/",
    codeLink: "https://github.com/DaranDachte/Vue3VersionAdviceGenerator",
  },
  {
    id: 2,
    imgSrc: VueJobL1,
    description:
      "This is an application I wrote using the Vue framework, Pinia state manager, Composition API and Tailwind ",
    technologies: " Vue,  Pinia, TypeScript, Composition API, Tailwind",
    name: " Job Listing Vue 3 Edition",
    screenShots: [VueJobL1, VueJobL2, VueJobL3],
    projectLink: "https://job-lisiting-vue3-edition.vercel.app/",
    codeLink: "https://github.com/DaranDachte/JobLisitingVue3Edition",
  },
  {
    id: 3,
    imgSrc: Sq1,
    description:
      "This is one of the first applications I wrote while learning the Vue framework. It is written in the 'old' style - Option API.  This app is taken from a course I purchased on Udemy.",
    technologies: " Vue, TypeScript, Option API, CSS",
    name: "Simple Qiuz OptionAPI",
    screenShots: [Sq1, Sq2, Sq3, Sq4],
    projectLink: "https://simple-qiuz-option-api.vercel.app/",
    codeLink:
      "https://github.com/DaranDachte/SimpleQiuzOptionApi?tab=readme-ov-file",
  },
  {
    id: 4,
    imgSrc: Ms1,
    description:
      "This application was written by me for the purpose of exploring the Pinia state manager.  I made a deploy of the project, but sometimes the search may fail for reasons beyond my control.  You can download the project to your computer and run it to check the functionality and design of the application. ",
    technologies: " Vue, TypeScript, Pinia, Composition API, CSS",
    name: "Vue3 Movies Searching App",
    screenShots: [Ms1, Ms2, Ms3, Ms4],
    projectLink: "https://vue3-movies-searching-app.vercel.app/",
    codeLink: "https://github.com/DaranDachte/Vue3MoviesSearchingApp",
  },
  {
    id: 5,
    imgSrc: Nb5,
    description:
      "This app was created by me as part of my training for the Vue framework. The Vue course was purchased by me on the Udemy platform. The CSS Framework Bulma was used to write the styles ",
    technologies: " Vue, TypeScript, Pinia, Composition API, Bulma",
    name: "Noteballs App",
    screenShots: [Nb1, Nb2, Nb3, Nb4],
    projectLink: "https://noteballs-gules.vercel.app/#/",
    codeLink: "https://github.com/DaranDachte/Noteballs",
  },
  {
    id: 6,
    imgSrc: Fq5,
    description:
      "This is a lightweight version of the FrontendQuiz Аpp that I created as part of learning Vue 3. It was important for me to work through the actions of the Router, component interactions, and working with the state. ",
    technologies: " Vue, TypeScript, Composition API, Vue router, Tailwind",
    name: "Frontend Quiz",
    screenShots: [Fq1, Fq2, Fq3, Fq4],
    projectLink: "https://frontend-quiz-indol.vercel.app/#/",
    codeLink: "https://github.com/DaranDachte/FrontendQuiz",
  },
  {
    id: 7,
    imgSrc: VueToDo1,
    description:
      "This application was created by me as part of my exploration of the Vue 3 framework ",
    technologies: " Vue, TypeScript, Composition API, Tailwind",
    name: "Vue3 Simple ToDo App",
    screenShots: [VueToDo1, VueToDo2, VueToDo3],
    projectLink: "https://vue3-simple-to-do-app.vercel.app/",
    codeLink: "https://github.com/DaranDachte/Vue3SimpleToDoApp",
  },
  {
    id: 8,
    imgSrc: Pp1,
    description:
      "This learning project is taken from the course 'Complete Vue Developer 2023: Zero to Mastery'",
    technologies: " Vue, TypeScript, Option API, CSS",
    name: "Perspective Playground",
    screenShots: [Pp1, Pp2, Pp3],
    projectLink: "https://perspective-playground-ten.vercel.app/",
    codeLink: "https://github.com/DaranDachte/PerspectivePlayground",
  },
];
