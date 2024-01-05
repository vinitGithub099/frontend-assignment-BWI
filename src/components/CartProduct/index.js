import styles from "./index.module.css";

const CartProduct = (props) => {
  const {
    product: {
      title,
      description,
      price,
      discountPercentage,
      rating,
      brand,
      category,
      images,
    },
    quantity,
  } = props;

  return (
    <div className={styles.cartProductContainer}>
      <div className={styles.cartProduct}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={images[0]} alt={title} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>{description}</p>
          <div className={styles.priceButtonContainer}>
            <p className={styles.price}>
              <span>$</span>
              {price}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Quantity:</span>
          <span className={styles.value}>{quantity}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Price: </span>
          <span className={styles.value}>{`$${quantity * price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
