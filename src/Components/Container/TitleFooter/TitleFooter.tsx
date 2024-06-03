import linkedinIcon from "../../../assets/img/linkedinIcon.svg";
import githubIcon from "../../../assets/img/githubIcon.svg";
import mailIcon from "../../../assets/img/mailIcon.png";

const TitleFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-4  pt-16 md:p-10">
      <div className="mb-4 md:mb-0 animate-[flicker_5s_infinite_alternate]">
        <div className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
          Daran Dachte
        </div>
      </div>
      <div className="flex items-center  space-x-4 md:pr-[1rem]">
        <a
          href="https://www.linkedin.com/in/daran-dachte-emil-t-031820249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="lnk"
            className="lg:w-[4rem] md:w-[3rem] sm:w-[2.5rem]"
          />
        </a>
        <a
          href="https://github.com/DaranDachte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubIcon}
            alt="git"
            className="lg:w-[4rem] md:w-[3rem] sm:w-[2.5rem]"
          />
        </a>
        <a
          href="mailto:darandachte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mailIcon}
            alt="mail"
            className="lg:w-[4rem] md:w-[3rem] sm:w-[2.5rem]"
          />
        </a>
      </div>
    </div>
  );
};

export default TitleFooter;
