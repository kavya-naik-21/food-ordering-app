import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9304278&lng=77.678404&restaurantId=${resId}`
    );
    const jsonData = await data.json();

    setRestaurantMenu(
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };
  return restaurantMenu;
};
export default useRestaurantMenu;
