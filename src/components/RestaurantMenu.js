import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantData = useRestaurantMenu(resId);

  console.log(restaurantData);
  const restaurantCategory =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="p-2">
      <h1 className="flex justify-center p-10">{restaurantData?.data?.cards[0]?.card?.card?.text}</h1>
      <div className="m-2">
      {restaurantCategory?.map((category) => {
        return (
            <RestaurantCategory key={category.card.card.categoryId} category={category} />
        );
      })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
