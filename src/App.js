import "./App.css";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHolder from "./MainHolder";
import AddTaskPopup from "./AddTaskPopup";

function App() {
  return (
    <div className="main-holder bg-gray3 ">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/dashboard" component={MainHolder} />
          <Route path="/dashboard/add-task" component={AddTaskPopup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
