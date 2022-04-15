import "./Function.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


// import rideData from "../data/RidesData";
import { pastRidesArray, upComingArray } from "./Logic";
// import "./NavbarSort.css";
// import PopupElement from "../popup-element/PopupElement";
import { allCities, allStates } from "./Logic";
import BodyNearest from "./layout/bodyNearest";
import BodyUpcoming from "./layout/bodyUpcoming";
import BodyPast from "./layout/bodyPast";
import userData from "./data/userData";
// import FilterDropDown from "../filterDropDown/FilterDropDown";


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
    const [nearest, setNeareast] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [past, setPast] = useState([]);
    // var nearest=[];
    // var nearest=[];
    // var nearest=[];
    var temp = [];
    var stCode = props.userData.station_code;
    var uData = props.userData;
    var rData = props.rideData;
    const arrange = (city, state) => {
        for (var i = 0; i < uData; i++) {
            if (city === "City" && state === "State") {
                temp = [];
                temp = nearest;
                temp.push(uData[i]);
                nearest.push(temp);
                if (uData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(uData[i]);
                    upcoming.push(temp);
                }
                if (uData[i].date > new Date()) {
                    temp = past;
                    temp.push(uData[i]);
                    past.push(temp);
                }
            } else if (city === "City" && state === uData[i].state) {
                temp = nearest;
                temp.push(uData[i]);
                nearest.push(temp);
                if (uData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(uData[i]);
                    upcoming.push(temp);
                }
                if (uData[i].date > new Date()) {
                    temp = past;
                    temp.push(uData[i]);
                    past.push(temp);
                }

            }
            else if (city === uData[i].city && state === "State") {
                temp = nearest;
                temp.push(uData[i]);
                nearest.push(temp);
                if (uData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(uData[i]);
                    upcoming.push(temp);
                }
                if (uData[i].date > new Date()) {
                    temp = past;
                    temp.push(uData[i]);
                    past.push(temp);
                }
            }
            else if (city === uData[i].city && state === uData[i].state) {
                temp = nearest;
                temp.push(uData[i]);
                nearest.push(temp);
                if (uData[i].date < new Date()) {
                    temp = upcoming;
                    temp.push(uData[i]);
                    upcoming.push(temp);
                }
                if (uData[i].date > new Date()) {
                    temp = past;
                    temp.push(uData[i]);
                    past.push(temp);
                }
            }
        }
        console.log(nearest);
        console.log(upcoming);
        console.log(past);
    }

    // const [stateDrop, setStateDrop] = useState(false);
    // const [cityDrop, setCityDrop] = useState(false);
    // const [stateList, setStateList] = useState(false);


    // const handleStateDrop = () => {
    //     setStateDrop(!stateDrop)
    //     if (stateDrop) {
    //         setStateList(true)
    //     } else {
    //         setStateList(false)
    //     }
    // }

    // const handleCityDrop = () => {
    //     setCityDrop(!cityDrop)
    // }

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
        setNeareast([]);
        setPast([]);
        setUpcoming([]);
        arrange(selectedCity, selectedState);
    }
    const handleUpcoming = () => {
        console.log("Upcoming Ride is Clicked");
        setNeareast([]);
        setPast([]);
        setUpcoming([]);
        arrange(selectedCity, selectedState);
    }
    const handlePast = () => {
        console.log("Past ride is clicked");
        setNeareast([]);
        setPast([]);
        setUpcoming([]);
        arrange(selectedCity, selectedState);
    }
    const handleState = (e) => {
        console.log("Selected state is " + e.target.value)
        setSelectedState(e.target.value);
        setNeareast([]);
        setPast([]);
        setUpcoming([]);
        arrange(selectedCity, selectedState);
        handleFilter();
    }
    const handleCity = (e) => {
        console.log("Selected city is " + e.target.value)
        setSelectedCity(e.target.value);
        setNeareast([]);
        setPast([]);
        setUpcoming([]);
        arrange(selectedCity, selectedState);
        handleFilter();
    }
    return (
        <>
            <div className="filters-navbar">
                <div className="filters-container">
                    <div className="filters-left">
                        <Link to='/' className="filter-link" style={handleLinkStyle('/')} >
                            <div className="filters-item" onClick={handleNearest}>
                                Nearest rides
                            </div>
                        </Link>
                        <Link to='/upcoming-rides' className="filter-link" style={handleLinkStyle('/up')}>
                            <div className="filters-item" onClick={handleUpcoming}>
                                Upcoming rides ({props.upComingArray.length})
                            </div>
                        </Link>
                        <Link to='/past-rides' className="filter-link" style={handleLinkStyle('/past-rides')}>
                            <div className="filters-item" onClick={handlePast}>
                                Past rides({props.pastRidesArray.length}) {/**/}
                            </div>
                        </Link>
                    </div>

                    <div className="filters-right" onClick={handleFilter}>
                        <div className="filters-item right" ><i className="fas fa-filter"></i> Filter</div>
                    </div>
                </div>
            </div>
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
                        {props.rideData.map(singleState => {
                            return <li><option className="dropdown-item" onClick={handleState}>{singleState.state}</option></li>
                        })}
                    </ul>

                    <a className=" city nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {selectedCity}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {props.rideData.map(singleCity => {
                            return <li><option className="dropdown-item" onClick={handleCity}> {singleCity.city}</option></li>
                        })}
                    </ul>
                </li>
                <li className="nav-item dropdown">
                </li>
            </div >
            <BodyNearest key="/" closest={closest} stCode={stCode} nearestArray={nearest} />
            <BodyUpcoming key="/upcoming" closest={closest} stCode={stCode} upComingArray={upcoming} />
            <BodyPast key="/past" closest={closest} stCode={stCode} pastRidesArray={past} />
        </>
    )
}

export default Function