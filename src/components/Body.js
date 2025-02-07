import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [lisOfRestaurants, setlisOfRestaurants] = useState([]);
  const [resToSearch, setResToSearch] = useState('')
  const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setlisOfRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };

  if (lisOfRestaurants.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter-restaurants">
        <div className="search-restaurants">
          <input className="search-input" value={resToSearch} onChange={(e) => {
            setResToSearch(e.target.value)
          }}></input>
          <button className="search-btn" onClick={()=> {
            const filteredOnes = lisOfRestaurants.filter((restaurant) => {
              return restaurant.info.name.toLowerCase().includes(resToSearch.toLowerCase())
            })
            setfilteredListOfRestaurants(filteredOnes)
          }}> Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="restaurants-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
