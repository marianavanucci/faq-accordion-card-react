import logo from "./logo.svg";
import imagemMobile from "./data/images/illustration-woman-online-mobile.svg";
import "./App.css";
import Question from "./Components/Question";
import Titulo from "./Components/Titulo";

function App() {
  return (
    <div className="App">
      <Titulo></Titulo>
      <Question></Question>
    </div>
  );
}

export default App;
