import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={
          CDN_URL +
          info.cloudinaryImageId
        }
      ></img>
      <h3>{info.name}</h3>
      <h3>{info.avgRating} Stars</h3>
      <h3>{info.cuisines.join(", ")}</h3>
      <h3>{info.costForTwo}</h3>
      <h3>Delivery Time: {info.sla.slaString}</h3>
    </div>
  );
};

export default RestaurantCard;
