import classes from "./CartButton.module.css";
import {  uiActions } from "../../slices/ui-slice";
import { useDispatch, useSelector } from "react-redux";


const CartButton = (props) => {
  const disptach = useDispatch();
  const cartQunatity = useSelector(state => state.cart.totalQunatity)
  const toggleCarthandler = () => {
    disptach(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQunatity}</span>
    </button>
  );
};

export default CartButton;
