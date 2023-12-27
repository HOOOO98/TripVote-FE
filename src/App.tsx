import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import MainRouter from "./routes/MainRouter/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
