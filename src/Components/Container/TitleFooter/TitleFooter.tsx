import Group from "../../../assets/img/Group.svg";

const TitleFooter = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="p-10 animate-[flicker_1.5s_infinite_alternate]">
        <div className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
          Daran Dachte
        </div>
      </div>
      <div>
        <img src={Group} alt="Group" />
      </div>
    </div>
  );
};

export default TitleFooter;
