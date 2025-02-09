import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9304278&lng=77.678404&restaurantId=${resId}`
    );
    const jsonData = await data.json();

    setRestaurantData(
      jsonData
    );
  };
  return restaurantData;
};
export default useRestaurantMenu;
