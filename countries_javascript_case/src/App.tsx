import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App: FC = () => {
  let element = useRoutes(routes);
  return <div className="App">{element}</div>;
};

export default App;
