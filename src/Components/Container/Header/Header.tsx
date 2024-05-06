import TitleFooter from "../TitleFooter/TitleFooter";
import { headerData } from "../../data/headerData";

const Header = () => {
  return (
    <>
      <div>
        <TitleFooter />
        <div className="flex justify-between flex-wrap mt-6 w-100 mx-5">
          {headerData.map((header) => (
            <div
              key={header.id}
              className="flex items-center justify-center group"
            >
              <div className="flex flex-col items-center">
                <img
                  src={header.imgSrc}
                  alt={header.alt}
                  className="w-[4rem] rounded transition ease-in-out delay-150 group-hover:-translate-y-5 hover:scale-x-[1.5] hover:scale-y-[1.5] hover:scale-110 duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                  <p className="text-sky-200">{header.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex align-center mt-5 justify-between items-start w-440 h-[15rem] px-[1rem]">
        <div>
          <p className="text-sky-200 text-2xl m-[1rem] leading-[3rem]">
            Hi! My name is Emil Terekhin, in Web Development I am also known as
            Daran Dachte. I live in West Germany, in the Düsseldorf area, but I
            am ready to move to any region of Germany if the offer is
            interesting.
          </p>
          <p className="text-sky-200 text-2xl m-[1rem] leading-[3rem]">
            I am currently actively looking for a job as a Web Developer. On
            this page you can see some of my projects created after graduating
            from programming school in early 2023. After that, for a year, I did
            personalized training with experienced developers with Senior WebDev
            and Team Lead level. I also interned at a company where I greatly
            improved my programming skills and teamwork principles.
          </p>
          <p className="text-sky-200 text-2xl m-[1rem] leading-[3rem]">
            I am proficient in the following bundles of technologies:
            React-Redux, Vue-Nuxt-Pinia. If you have any questions or
            suggestions, feel free to get in touch.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
