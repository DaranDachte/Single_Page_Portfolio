import { Routes, Route } from "react-router-dom";
import TinyApps from "../../Pages/SimpleTinyApps/TinyApps";
import ApiApps from "../../Pages/Apps using API/ApiApps";
import ReduxApps from "../../Pages/Apps using Redux/ReduxApps";
import RouterApps from "../../Pages/Apps with React RouterDom/RouterApps";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/tinyApps" element={<TinyApps />} />
        <Route path="/apiApps" element={<ApiApps />} />
        <Route path="/reduxApps" element={<ReduxApps />} />
        <Route path="/RouterApps" element={<RouterApps />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
