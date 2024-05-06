import C1 from "../../assets/img/ClassroomApp/C1.png";
import C2 from "../../assets/img/ClassroomApp/C2.png";
import C3 from "../../assets/img/ClassroomApp/C3.png";
import C4 from "../../assets/img/ClassroomApp/C4.png";
import C5 from "../../assets/img/ClassroomApp/C5.png";
import C6 from "../../assets/img/ClassroomApp/C6.png";
import C7 from "../../assets/img/ClassroomApp/C7.png";
import C8 from "../../assets/img/ClassroomApp/C8.png";
import C9 from "../../assets/img/ClassroomApp/C9.png";
import C10 from "../../assets/img/ClassroomApp/C10.png";
import C11 from "../../assets/img/ClassroomApp/C11.png";
import C12 from "../../assets/img/ClassroomApp/C12.png";
import C13 from "../../assets/img/ClassroomApp/C13.png";

import Ct1 from "../../assets/img/CarTrader/Ct1.png";
import Ct2 from "../../assets/img/CarTrader/Ct2.png";
import Ct3 from "../../assets/img/CarTrader/Ct3.png";
import Ct4 from "../../assets/img/CarTrader/Ct4.png";
import Ct5 from "../../assets/img/CarTrader/Ct5.png";
import Ct6 from "../../assets/img/CarTrader/Ct6.png";

export const nuxtData = [
  {
    id: 1,
    imgSrc: C2,
    description:
      "I developed this project with Nuxt3 framework, using Nuxt Ui  libraries. Since only the frontend is presented here, some functions are presented only as html elements (transition from one page to another, statistics page, selection in some inputs). Due to lack of Nuxt Pro license (249$) I can't make a deploy of this application. But you can see the code and appearance in this repository. ",
    technologies: " Nuxt3, NuxtUI, TypeScript, Composition API, Tailwind",
    name: "ClassroomApp with NuxtUi",
    screenShots: [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13],
    projectLink: "",
    codeLink: "https://github.com/DaranDachte/ClassroomAppWithNuxtUi",
  },
  {
    id: 2,
    imgSrc: Ct6,
    description:
      "This project was created using the Nuxt framework. The Tailwind CSS framework was used to write the styles This application was written by me step by step as part of a Nuxt course I purchased on Udemi ",
    technologies: " Nuxt3, TypeScript, Composition API, Tailwind",
    name: "Car Trader",
    screenShots: [Ct1, Ct2, Ct3, Ct4, Ct5],
    projectLink: "https://car-trader-gilt.vercel.app/",
    codeLink: "https://github.com/DaranDachte/CarTrader/blob/main/package.json",
  },
];
