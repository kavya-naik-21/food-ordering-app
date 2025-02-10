import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-5">
      <span className="flex justify-center">Cart</span>
      <span className="flex justify-center">
        <button
          className=" bg-amber-200 rounded-md p-2"
          onClick={handleClearCart}
        >
          clear Cart
        </button>{" "}
      </span>
      <div className="flex justify-center flex-wrap">
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
