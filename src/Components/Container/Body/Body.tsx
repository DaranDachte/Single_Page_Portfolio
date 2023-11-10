import InvoiceAppHomePage from "../../../assets/img/Invoice App/HomePage.jpg";

const Body = () => {
  return (
    <>
      <h2 className="text-sky-200">Projects</h2>
      <div className="flex justify-between">
        <div>
          <div className="w-[33.75rem] h-[25rem] group ">
            <div className=" flex flex-col items-center justify-center absolute opacity-0 group-hover:bg-black/75   group-hover:opacity-100 transition-opacity delay-150  w-[33.75rem] h-[25rem]">
              <div className="text-sky-200 p-[2rem] underline decoration-solid ">
                View Screenshots
              </div>
              <div className="text-sky-200 p-[2rem] underline decoration-solid">
                View Project
              </div>
              <div className="text-sky-200 p-[2rem] underline decoration-solid">
                View Code
              </div>
            </div>
            <img className="h-full w-full" src={InvoiceAppHomePage} />
          </div>

          <div>
            <p className="text-sky-200">Description</p>
          </div>
          <div>
            <p className="text-sky-200">Technologies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
