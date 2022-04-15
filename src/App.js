import './App.css';
import Dashborad from './components/layout/Dashboard';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BodyNearest from './components/layout/bodyNearest';
import BodyUpcoming from './components/layout/bodyUpcoming';
import BodyPast from './components/layout/bodyPast';
import userData1 from './components/data/userData';
import NavbarSort from './components/layout/NavbarSort';
import { useState } from 'react';
import PropTypes from 'prop-types'
import axios from "axios";

import React, { Component } from 'react'

// async function getData(url, data) {
//   const resp = await fetch(url);
//   data = await resp.json();
//   return data;
// }
// export default class App extends Component {
//   constructor() {
//     super();
//     const [filterState, setFilterState] = useState(false);
//     const [nearestActive, setNearestActive] = useState(false);
//     const [pastActive, setPastActive] = useState(false);
//     const [upcomingActive, setUpcomingActive] = useState(false);
//     this.userData = {
//       station_code: 0,
//       name: "Abhinav",
//       url: "url"
//     };
//     this.RidesData = {
//       id: 226,
//       origin_station_code: 12,
//       station_path: [56, 68, 74, 82],
//       destination_station_code: 95,
//       date: "02/05/2022 08:08 PM",
//       map_url: "url",
//       state: "Goa",
//       city: "Mapusa"
//     };

//   }

//   async componentDidMount() {
//     // getData("https://assessment.api.vweb.app/user", this.RidesData);
//     // console.log(this.RidesData);
//     // getData("https://assessment.api.vweb.app/rides", this.userData);
//     // console.log(this.userData);
//     const resp = await fetch("https://assessment.api.vweb.app/user");
//     const data = await resp.json();
//     this.setUserData({
//       station_code: data.station_code,
//       name: data.name,
//       url: data.url
//     });

//     const resp1 = await fetch("https://assessment.api.vweb.app/rides");
//     const data1 = await resp.json();
//     this.setRidesData(data1);

//   }
//   render() {
//     return (

//       <Router>
//         <Dashborad
//           name={this.userData.name}
//           image={this.userData.url}
//         />
//         <Navbar filterState={filterState} setFilterState={setFilterState} />
//         <NavbarSort filterState={filterState} />
//         <Switch>
//           <Route exact path="/" key="Nearest" >
//             <BodyNearest />
//           </Route>
//           <Route exact path="/up" key="Upcoming">
//             <BodyUpcoming />
//           </Route>
//           <Route exact path="/past-rides" key="Past">
//             <BodyPast />
//           </Route>
//         </Switch>
//       </Router>
//     )
//   }
// }


function App() {

  const [filterState, setFilterState] = useState(false);
  const [nearestActive, setNearestActive] = useState(false);
  const [pastActive, setPastActive] = useState(false);
  const [upcomingActive, setUpcomingActive] = useState(false);


  const [userData, setUserData] = React.useState({});
  const [ridesData, setRidesData] = React.useState({})

  //   fetch("https://assessment.api.vweb.app/user")
  //     .then(res => res.json())
  //     .then(res => setUserData({ userData: res }))
  //     .catch(() => console.log("User API isn't working!"));
  //   console.log(userData)

  //   fetch("https://assessment.api.vweb.app/rides")
  //     .then(res1 => res1.json())
  //     .then(res1 => setRidesData({ ridesData: res1 }))
  //     .catch(() => console.log("User API isn't working!"));
  // console.log(ridesData)

  // const [us, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://assessment.api.vweb.app/user").then((response) => {
      setUserData(response.data);
    });
  }, []);
  // console.log(Object.values(userData)[1]); 
  
  React.useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then((response) => {
      setRidesData(response.data);
    });
  }, []);
  console.log(Object.values(ridesData)[2].id); 
  
  return (
    <Router>
      <Dashborad
        name={Object.values(userData)[1]}
        image={Object.values(userData)[2]}
      />
      <Navbar filterState={filterState} setFilterState={setFilterState} />
      <NavbarSort filterState={filterState} />
      <Switch>
        <Route exact path="/" key="Nearest" >
          <BodyNearest />
        </Route>
        <Route exact path="/up" key="Upcoming">
          <BodyUpcoming />
        </Route>
        <Route exact path="/past-rides" key="Past">
          <BodyPast />
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
