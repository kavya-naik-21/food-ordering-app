import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [lisOfRestaurants, setlisOfRestaurants] = useState([]);
  const [resToSearch, setResToSearch] = useState('')
  const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([])

  const onlineStatus = useOnlineStatus();
  console.log('online status', onlineStatus)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setlisOfRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };
  if(!onlineStatus) {
    return <h1> oops you are offline</h1>
  }
  if (lisOfRestaurants.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="p-5">
      <div className="flex justify-center flex-wrap">
        <div className="">
          <input className="border-1 rounded-md" value={resToSearch} onChange={(e) => {
            setResToSearch(e.target.value)
          }}></input>
          <button className="bg-gray-300 rounded-md p-2 ml-3" onClick={()=> {
            const filteredOnes = lisOfRestaurants.filter((restaurant) => {
              return restaurant.info.name.toLowerCase().includes(resToSearch.toLowerCase())
            })
            setfilteredListOfRestaurants(filteredOnes)
          }}> Search</button>
        </div>
        <button
          className="bg-gray-300 rounded-md p-2 ml-20"
          onClick={() => {
            const updatedlisOfRestaurants = lisOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.avgRating > 4.3;
              }
            );
            setfilteredListOfRestaurants(updatedlisOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap p-2 mt-10">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurant/'+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
