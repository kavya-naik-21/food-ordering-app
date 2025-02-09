import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  return (
    <div className="p-4 bg-gray-100 m-2 w-55 rounded-xl h-120 hover:bg-gray-200">
      <img
        className="h-50 w-50 rounded-lg"
        src={CDN_URL + info.cloudinaryImageId}
      ></img>
      <h3>{info.name}</h3>
      <h3>{info.avgRating} Stars</h3>
      <h3>{info.cuisines.join(", ")}</h3>
      <h3>{info.costForTwo}</h3>
      <h3>Delivery Time: {info.sla.slaString}</h3>
    </div>
  );
};

export const withDiscountInfo = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative inline-block">
        <label className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded ml-1 mt-1">Great Discounts</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
