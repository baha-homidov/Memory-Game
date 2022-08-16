import "./assets/styles/App.css";
import Cardgrid from "./components/Cardgrid";
import Scoreboard from "./components/Scoreboard";
import Title from "./components/Title";
function App() {
  return (
    <div className="root-container">
      <div className="header">
        <Title />
      </div>
      <Cardgrid />
    </div>
  );
}

export default App;
