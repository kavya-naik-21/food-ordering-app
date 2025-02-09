import { useState } from "react";
import { CDN_URL } from "../utils/constants";
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
          itemCards?.map((item) => {
            const { id, name, defaultPrice, price, description, imageId } =
              item.card.info;
            return (
              <li key={id} className="flex p-5 mt-0.5 border-t-1 border-gray-200 shadow-md rounded-2xl hover:bg-gray-200">
                <div className="w-150 mr-2">
                  <div className="font-extrabold">{name} </div>
                  <div className="pt-2 font-medium">
                    Rs. {defaultPrice / 100 || price / 100}{" "}
                  </div>
                  <div className="pt-2 font-light text-sm">{description} </div>
                </div>
                <div className="w-50">
                  <img src={CDN_URL + imageId} className="rounded-2xl"></img>
                  <div className="flex justify-center">
                    <label className=" bg-emerald-500 rounded-lg pl-3 pr-3 mt-1 hover:bg-emerald-600">
                      Add+
                    </label>
                  </div>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
