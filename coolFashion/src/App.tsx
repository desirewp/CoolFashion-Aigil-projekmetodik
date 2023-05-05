import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Mall from "./Mall/Mall";

function App() {
  return (
    <>
      <BrowserRouter>
        <Mall></Mall>
      </BrowserRouter>
    </>
  );
}

export default App;
