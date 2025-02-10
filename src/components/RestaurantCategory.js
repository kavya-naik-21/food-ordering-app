import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { category } = props;
  const card = category.card.card;
  const itemCards = card.itemCards;

  const toggleAccordian = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className="flex justify-center">
      <div className="m-3 w-200 bg-gray-100 rounded-2xl shadow-md">
        <div
          className="flex justify-between cursor-pointer bg-gray-100 hover:bg-gray-200 p-5 rounded-2xl shadow-md font-bold text-gray-800"
          onClick={toggleAccordian}
        >
          <span>{card.title + " (" + itemCards.length + ")"}</span>
          <span className="font-extrabold">{isMenuVisible ? "-" : "+"} </span>
        </div>
        {isMenuVisible &&
          <ItemList itemCards={itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
