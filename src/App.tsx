import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes";

function App() {
  return (
    <div id="app" data-theme="light">
      <BrowserRouter
        basename={process.env["environment"] === "gh-pages" ? "/pokedex" : "/"}
      >
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
