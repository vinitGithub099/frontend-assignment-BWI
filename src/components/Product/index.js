import { updateCart } from "@/store/features/Cart/slice";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";

const Product = (props) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    images,
  } = props;
  const dispatch = useDispatch();

  const addTocart = () => {
    dispatch(updateCart(props));
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{title}</div>
      <img className={styles.image} src={images[0]} alt={title} />
      <p className={styles.description}>{description}</p>
      <div className={styles.priceButtonContainer}>
        <p className={styles.price}>
          <span>$</span>
          {price}
        </p>
        <button className={styles.button} onClick={addTocart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

/* 
Sample Product:
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "...",
  "images": ["...", "...", "..."]
}
*/
