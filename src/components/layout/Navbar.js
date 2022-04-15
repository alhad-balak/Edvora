import "./Navbar.css";

import { Link } from "react-router-dom";
import {pastRidesArray, upComingArray} from "../Logic";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const currentLocation = useLocation().pathname;
  console.log(currentLocation);
  const handleFilter =()=>{
    console.log("I work!!");
    props.setFilterState(!props.filterState)
  }
  
  const linkStyle ={
    textDecoration:"none",
    color:"#fff"
  }
  const activeLinkStyle = {
    textDecorationLine:"underline",
    color:"#fff",
    textUnderlineOffset: "6px",
    textDecorationThickness: "2px"
  }
  const handleLinkStyle =(a)=>{
    if (currentLocation===a){
      return activeLinkStyle
    }else{
      return linkStyle
    }
  }
  return (
    <div className="filters-navbar">
        <div className="filters-container">
            <div className="filters-left">
              <Link to='/' className="filter-link" style={handleLinkStyle('/')} >
                <div className="filters-item">
                  Nearest rides {/*({props.nearestArray.length})*/}
                </div>
              </Link>
              <Link to='/up' className="filter-link" style={handleLinkStyle('/up')}>
                <div className="filters-item" >
                  Upcoming rides ({props.upComingArray.length}) 
                </div>
                
              </Link>
              <Link to='/past-rides' className="filter-link" style={handleLinkStyle('/past-rides')}>
                <div className="filters-item">
                  Past rides({props.pastRidesArray.length}) {/**/}
                </div>
              </Link>
            </div>
            <div className="filters-right" onClick={handleFilter}>
                <div className="filters-item right" ><i className="fas fa-filter"></i> Filter</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar