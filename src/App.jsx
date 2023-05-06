import "./App.css";
import "./index.css";
import { NavLink, Route, Routes } from "react-router-dom";

import { Line, Between, Grid, Rows, Inpu, Center } from "UIKit";
import { HomeView } from "Views/HomeView";
import { ProfileView } from "Views/ProfileView";

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Between>
          <Line>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </Line>
        </Between>

        <div>
          <Routes>
            <Route path="/home" element={<HomeView />} />
            <Route path="/Profile" element={<ProfileView />} />
          </Routes>
        </div>
      </Grid>
    </div>
  );
};

export default App;
