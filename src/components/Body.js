import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [lisOfRestaurants, setlisOfRestaurants] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter-restaurants">
        <button
          className="filter-btn"
          onClick={() => {
            const updatedlisOfRestaurants = lisOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4.3;
            });
            setlisOfRestaurants(updatedlisOfRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {lisOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
