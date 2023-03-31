import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import Input from "./objects/Input";
import "./App.css";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input />
    </main>
  );
};

export default App;
