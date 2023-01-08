import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes";

function App() {
  return (
    <div id="app" data-theme="light">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
