import { Routes, Route } from "react-router-dom";
import TinyApps from "../../Pages/SimpleTinyApps/TinyApps";
import ApiApps from "../../Pages/Apps using API/ApiApps";
import ReduxApps from "../../Pages/Apps using Redux/ReduxApps";
import RouterApps from "../../Pages/Apps with React RouterDom/RouterApps";
import Body from "../Container/Body/Body";
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="tinyApps" element={<TinyApps />} />
          <Route path="apiApps" element={<ApiApps />} />
          <Route path="reduxApps" element={<ReduxApps />} />
          <Route path="RouterApps" element={<RouterApps />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
