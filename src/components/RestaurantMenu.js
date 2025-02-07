import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const { resId } = useParams();

  console.log(resId)
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
  return (
    <div className="restaurant-menu">
      <h1>restaurant name</h1>
      <h3>
        {restaurantMenu.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} : Rs.{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          );
        })}
      </h3>
    </div>
  );
};

export default RestaurantMenu;
