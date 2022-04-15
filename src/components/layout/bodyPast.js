import Ride from "./Ride";
import "./body.css";

function BodyPast(props) {
    // console.log(Date.now());
    return (
      <div className="rides" key="Past">
              {props.pastRidesArray.map((oneRide, index)=>(
              <Ride
              key={oneRide.id}
              id={oneRide.id}
              os_code={oneRide.origin_station_code}
              s_path={oneRide.station_path.toString()}
              date={new Date(oneRide.date).toDateString({})}
              map_url={oneRide.map_url}
              state={oneRide.state}
              city={oneRide.city}
              distance={Math.abs(props.closest(oneRide.station_path, props.stCode)-props.stCode)}
              />
              ))}        
      </div>
    )
}

export default BodyPast