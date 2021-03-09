import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import CustomButton from "./CustomButton";
import TaskHolder from "./TaskHolder";

function App() {
  return (
    <div className="main-holder bg-gray3">
      <NavBar />
      <div className="column parent-size align-items-center mt-xxxl">
        <TaskHolder />
      </div>
    </div>
  );
}

export default App;
