import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { itemCards } = props;

  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return itemCards?.map((item) => {
    const { id, name, defaultPrice, price, description, imageId } =
      item.card.info;
    return (
      <li
        key={id}
        className="flex p-5 mt-0.5 border-t-1 border-gray-200 shadow-md rounded-2xl hover:bg-gray-200"
      >
        <div className="w-150 mr-2">
          <div className="font-extrabold">{name} </div>
          <div className="pt-2 font-medium">
            Rs. {defaultPrice / 100 || price / 100}{" "}
          </div>
          <div className="pt-2 font-light text-sm">{description} </div>
        </div>
        <div className="w-50">
          <img src={CDN_URL + imageId} className="rounded-2xl"></img>
          <div className="flex justify-center" onClick={()=>handleAddItem(item)}>
            <label className=" bg-emerald-500 rounded-lg pl-3 pr-3 mt-1 hover:bg-emerald-600">
              Add+
            </label>
          </div>
        </div>
      </li>
    );
  });
};

export default ItemList;
