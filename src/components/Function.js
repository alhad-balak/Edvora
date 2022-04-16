import "./Function.css";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BodyNearest from "./layout/bodyNearest"
import BodyPast from "./layout/bodyPast"
import BodyUpcoming from "./layout/bodyUpcoming"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Function(props) {
    const currentLocation = useLocation().pathname;
    // console.log(currentLocation);
    const [filterState, setFilterState] = useState(false);
    const handleFilter = () => {
        // console.log("Filter is clicked");
        setFilterState(!filterState)
    }

    const closest = (arr, num) => {
        return arr.reduce((acc, val) => {
            if (Math.abs(val - num) < Math.abs(acc)) {
                return val - num;
            } else {
                return acc;
            }
        }, Infinity) + num;
    }

    const [selectedState, setSelectedState] = useState("State");
    const [selectedCity, setSelectedCity] = useState("City");
    const [nearest, setNearest] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [past, setPast] = useState([]);

    var temp = [];
    var stCode = props.userData.station_code;
    var rData = props.userData;
    var rData = props.rideData;

    const arrange = (city, state) => {
        console.log(city, state);
        for (var i = 0; i < rData; i++) {
            if (city === "City" && state === "State") {
                temp = [];
                // console.log(temp);
                temp = nearest;
                // console.log(temp);
                temp.push(rData[i]);

                // console.log(temp);
                setNearest((ele) => ele,
                    {
                        id: rData[i].id,
                        origin_station_code: rData[i].origin_station_code,
                        station_path: rData[i].station_path,
                        date: rData[i].date,
                        map_url: rData[i].map_url,
                        state: rData[i].state,

                    });
                console.log("\n\n")
                if (rData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(rData[i]);
                    setUpcoming(temp);
                }
                if (rData[i].date > new Date()) {
                    temp = past;
                    temp.push(rData[i]);
                    setPast(temp);
                }
            } else if (city === "City" && state === rData[i].state) {
                temp = nearest;
                temp.push(rData[i]);
                setNearest(temp);
                if (rData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(rData[i]);
                    setUpcoming(temp);
                }
                if (rData[i].date > new Date()) {
                    temp = past;
                    temp.push(rData[i]);
                    setPast(temp);
                }

            }
            else if (city === rData[i].city && state === "State") {
                temp = nearest;
                temp.push(rData[i]);
                setNearest(temp);
                if (rData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(rData[i]);
                    setUpcoming(temp);
                }
                if (rData[i].date > new Date()) {
                    temp = past;
                    temp.push(rData[i]);
                    setPast(temp);
                }
            }
            else if (city === rData[i].city && state === rData[i].state) {
                temp = nearest;
                temp.push(rData[i]);
                setNearest(temp);
                if (rData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(rData[i]);
                    setUpcoming(temp);
                }
                if (rData[i].date > new Date()) {
                    temp = past;
                    temp.push(rData[i]);
                    setPast(temp);
                }
            }
        }
    //     console.log(city, state);
    //     console.log(nearest);
    //     console.log(upcoming);
    //     console.log(past);
    }
    // arrange("City", "State");

    const linkStyle = {
        textDecoration: "none",
        color: "#fff"
    }
    const activeLinkStyle = {
        textDecorationLine: "underline",
        color: "#fff",
        textUnderlineOffset: "6px",
        textDecorationThickness: "2px"
    }
    const handleLinkStyle = (a) => {
        if (currentLocation === a) {
            return activeLinkStyle
        } else {
            return linkStyle
        }
    }
    const handleNearest = () => {
        console.log("Nearest Ride is CLicked");
    }
    const handleUpcoming = () => {
        console.log("Upcoming Ride is Clicked");
    }
    const handlePast = () => {
        console.log("Past ride is clicked");
    }
    const handleState = (e) => {
        console.log("Selected state is " + e.target.value)
        setSelectedState(e.target.value);
        // setNearest([]);
        // setPast([]);
        // setUpcoming([]);
        arrange(selectedCity, selectedState);
        handleFilter();
    }
    const handleCity = (e) => {
        console.log("Selected city is " + e.target.value)
        setSelectedCity(e.target.value);
        // setNearest([]);
        // setPast([]);
        // setUpcoming([]);

        arrange(selectedCity, selectedState);
        handleFilter();
    }
    return (
        <>
            <div className="filters-navbar" >
                <div className="filters-container">
                    <div className="filters-left">
                        <Link to='/' className="filter-link" style={handleLinkStyle('/')} >
                            <div className="filters-item" onClick={handleNearest}>
                                Nearest rides
                            </div>
                        </Link>
                        <Link to='/upcoming-rides' className="filter-link" style={handleLinkStyle('/up')}>
                            <div className="filters-item" onClick={handleUpcoming}>
                                Upcoming rides ({upcoming.length})
                            </div>
                        </Link>
                        <Link to='/past-rides' className="filter-link" style={handleLinkStyle('/past-rides')}>
                            <div className="filters-item" onClick={handlePast}>
                                Past rides({past.length})
                            </div>
                        </Link>
                    </div>

                    <div className="filters-right" onClick={handleFilter}>
                        <div className="filters-item right" ><i className="fas fa-filter"></i> Filter</div>
                    </div>
                </div>
            </div >
            <div className="filter-popup" style={filterState ? { display: "block" } : { display: "none" }}>
                <div className="title">
                    Filters
                </div>
                <div className="title-bar" />
                <li className="nav-item dropdown">
                    <a className=" state nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" >
                        {selectedState}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {props.rideData.map((singleState, ind) => {
                            return <li key={ind}><option className="dropdown-item" onClick={handleState}>{singleState.state}</option></li>
                        })}
                    </ul>

                    <a className=" city nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {selectedCity}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {props.rideData.map((singleCity, index) => {
                            return <li key={index}><option className="dropdown-item" onClick={handleCity}> {singleCity.city}</option></li>
                        })}
                    </ul>
                </li>
                <li className="nav-item dropdown">
                </li>
            </div >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <BodyNearest key="/nearest" closest={closest} stCode={stCode} nearestArray={rData.slice(0, 10)} />
                    </Route>
                    <Route exact path="/upcoming-rides">
                        <BodyUpcoming key="/upcoming" closest={closest} stCode={stCode} upComingArray={rData.slice(11, 19)} />
                    </Route>
                    <Route exact path="/past-rides">
                        <BodyPast key="/past" closest={closest} stCode={stCode} pastRidesArray={rData.slice(34, 37)} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Function