import rideData from "../data/RidesData";

import "./NavbarSort.css";
import { useState } from "react";
// import PopupElement from "../popup-element/PopupElement";
import { allCities, allStates } from "../Logic";
// import FilterDropDown from "../filterDropDown/FilterDropDown";


function NavbarSort(props) {
    const [stateDrop, setStateDrop] = useState(false);
    const [cityDrop, setCityDrop] = useState(false);
    const [stateList, setStateList] = useState(false);


    const handleStateDrop = () => {
        setStateDrop(!stateDrop)
        if (stateDrop) {
            setStateList(true)
        } else {
            setStateList(false)
        }
    }

    const handleCityDrop = () => {
        setCityDrop(!cityDrop)
    }


    return (
        <div className="filter-popup" style={props.filterState ? { display: "block" } : { display: "none" }}>
            <div className="title">
                Filters
            </div>
            <div className="title-bar" />
            <li className="nav-item dropdown">
                <a className=" state nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    State
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {props.rideData.map(singleState => {
                        return <li><a className="dropdown-item" href="#">{singleState.state}</a></li>
                    })}
                </ul>

                <a className=" city nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    City
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {props.rideData.map(singleCity => {
                        return <li><a className="dropdown-item" href="#">{singleCity.city}</a></li>
                    })}
                </ul>
            </li>
            <li className="nav-item dropdown">

            </li>
        </div>
    )
}

export default NavbarSort