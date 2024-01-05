import CartProduct from "@/components/CartProduct";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import isAuth from "../auth";

const CartsPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const user = useSelector((state) => state.auth.user);
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{`${
        user && user.name ? `${user.name}'s` : `Your`
      }  Cart`}</h2>
      <div className={styles.cartInfoContainer}>
        <div className={styles.cartInfoItem}>
          <span className={styles.label}>Total Quantity:</span>
          <span className={styles.value}>{totalQuantity}</span>
        </div>
        <div className={styles.cartInfoItem}>
          <span className={styles.label}>Total Price:</span>
          <span className={styles.value}>{`$${totalPrice}`}</span>
        </div>
      </div>
      <div>
        {cart && cart.length
          ? cart.map((item, index) => (
              <CartProduct key={index} {...item}></CartProduct>
            ))
          : null}
      </div>
    </div>
  );
};

// export default CartsPage;
export default isAuth(CartsPage);
