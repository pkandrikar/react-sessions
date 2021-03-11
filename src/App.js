import "./App.css";
import NavBar from "./NavBar";
import TaskHolder from "./TaskHolder";
import FolderHolder from "./FolderHolder";

function App() {
  return (
    <div className="main-holder bg-gray3 ">
      <NavBar />
      <div className="column parent-width parent-height align-items-center justify-content-center ">
        <div>
          <div
            className="row shadow-m border-radius-m border-m bg-white"
            style={{ overflow: "hidden" }}
          >
            <FolderHolder />
            <TaskHolder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
