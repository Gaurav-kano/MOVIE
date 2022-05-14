
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Data from "./Pages/Data";

function App() {
  return (
    <div >
    
    <Router>
        <div className="navBar">
          <div className="navMenu">
            <NavLink to="/">
            
            </NavLink>
            <div className="break">
              <NavLink className="a" to="/">
                Home
              </NavLink>
              <NavLink className="a" to="/data">
                About
              </NavLink>
              <NavLink className="a" to="/data">
                Watch
              </NavLink>
                <NavLink className="a" to="/data">
                Genres
              </NavLink>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
  
        </Routes>
        </Router>
    </div>
  );
}

export default App;
