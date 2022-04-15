import rideData from "./data/RidesData";
import userData from "./data/userData";

const userLocation = userData.station_code;
const ride_data = rideData;


const closest = (arr, num)=>{
    return arr.reduce((acc,val)=>{
        if (Math.abs(val-num)< Math.abs(acc)){
            return val - num;
        }else{
            return acc;
        }
    }, Infinity) + num;  
    
}

const allStates = rideData.map((singleRide)=>singleRide.state);
const allCities = rideData.map((singleRide)=>singleRide.state);

const nearestArray = ride_data.sort((a,b)=>{
  if(closest(a.station_path,userLocation) > closest(b.station_path,userLocation)){
      return 1
  }else{
      return -1
  }
 
})

const pastRidesArray = rideData.filter(singleRide=> singleRide.date < new Date());
const upComingArray = rideData.filter(singleRide=> singleRide.date > new Date());




export {closest, nearestArray, pastRidesArray, upComingArray};