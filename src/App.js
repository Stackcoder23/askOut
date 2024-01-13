import "./App.css";
import NameInput from "./NameInput";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AskOut from "./AskOut";
import app from "./firebase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={NameInput} />
        <Route exact path="/askHerOut" Component={AskOut} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
