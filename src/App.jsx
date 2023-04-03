import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import Input from "./objects/Input";
import Checkbox from "./objects/Checkbox";  
import "./App.css";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" content="Mostrar eventos"/>
    </main>
  );
};

export default App;
