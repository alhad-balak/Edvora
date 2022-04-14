import "./body.css";
import Ride from "./Ride";
import userData from "../data/userData";

import { upComingArray } from "./Logic";
import { closest } from "./Logic";


function bodyUpcoming(props) {
    return (
      <div className="rides">
              {upComingArray.map((oneRide, index)=>(
              <Ride
              key={oneRide.id}
              id={oneRide.id}
              os_code={oneRide.origin_station_code}
              s_path={oneRide.station_path.toString()}
              date={new Date(oneRide.date).toDateString({})}
              map_url={oneRide.map_url}
              state={oneRide.state}
              city={oneRide.city}
              distance={Math.abs(closest(oneRide.station_path, 40)-userData.station_code)}
              />
              ))}        
      </div>
    )
}

export default bodyUpcoming