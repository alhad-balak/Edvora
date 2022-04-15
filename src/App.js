import './App.css';
import Dashborad from './components/layout/Dashboard';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BodyNearest from './components/layout/bodyNearest';
import BodyUpcoming from './components/layout/bodyUpcoming';
import BodyPast from './components/layout/bodyPast';
import userData from './components/data/userData';
import NavbarSort from './components/layout/NavbarSort';
import { useState } from 'react';



function App() {

  const [filterState, setFilterState] = useState(false);
  const [nearestActive, setNearestActive] = useState(false);
  const [pastActive, setPastActive] = useState(false);
  const [upcomingActive, setUpcomingActive] = useState(false);
  return (
    <Router>
      <Dashborad
        name={userData.name}
        image={userData.url}
      />
      <Navbar filterState={filterState} setFilterState={setFilterState} />
      <NavbarSort filterState={filterState} />
      <Switch>
        <Route exact path="/" key="Nearest" >
          <BodyNearest/>
        </Route>
        <Route exact path="/up" key="Upcoming">
          <BodyUpcoming/>
        </Route>
        <Route exact path="/past-rides" key="Past">
          <BodyPast/>
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
