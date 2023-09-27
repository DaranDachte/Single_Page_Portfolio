import Splitter from "../../assets/img/Splitter.jpg";
import toDo from "../../assets/img/toDo.jpg";
const TinyApps = () => {
  return (
    <div>
      <div>
        <img src={toDo} alt="todo" />
      </div>
      <div>
        <h3>ToDo List</h3>
      </div>
      <div>
        <p>HTML SASS TypeScript Application Context</p>
      </div>
      <div>
        <img src={Splitter} alt="Splitter" />
      </div>
      <div>
        <h3> Tip Calculator</h3>
      </div>
      <div>
        <p>HTML Css TypeScript </p>
      </div>
    </div>
  );
};

export default TinyApps;
