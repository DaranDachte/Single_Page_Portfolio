import Group from "../../../assets/img/Group.svg";

const TitleFooter = () => {
  return (
    <div className="flex items-center justify-between ml-40 mr-40 ">
      <div>
        <p className="font-bold text-4xl  font-[SpaceGrotesk]">DaranDachte</p>
      </div>
      <div>
        <img src={Group} alt="Group" />
      </div>
    </div>
  );
};

export default TitleFooter;
