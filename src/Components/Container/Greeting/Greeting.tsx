import ContactButton from "../ContactButton/ContactButton";

const Greeting = () => {
  return (
    <div className=" flex flex-col justify-evenly items-start w-440 h-[40rem] ">
      <div>
        <h2>Nice to meet you! I'm DaranDachte</h2>
      </div>
      <div>
        <p>
          Based in the West Germany, I'm a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </div>
      <div>
        <ContactButton />
      </div>
    </div>
  );
};

export default Greeting;
