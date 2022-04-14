import Ride from "./Ride";
import "./body.css";
import userData from "../data/userData";

import { closest } from "./Logic";
import {pastRidesArray} from "./Logic";

function bodyPast() {
    console.log(Date.now());
    return (
      <div className="rides" key="PastRi">
              {pastRidesArray.map((oneRide, index)=>(
              <Ride
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

export default bodyPast