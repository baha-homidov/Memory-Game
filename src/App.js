import "./assets/styles/App.css";
import Gameboard from "./components/Gameboard";
import Title from "./components/Title";
function App() {
  return (
    <div className="root-container">
      <div className="header">
        <Title />
      </div>
      <Gameboard />
    </div>
  );
}

export default App;
