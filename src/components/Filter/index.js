import { productActions } from "@/store/features/Product/actions";
import { filerProducts } from "@/store/features/Product/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";

const vals = ["<100", ">=100 and <500", ">=500 and <1000", ">=100- and <2000"];

const FilterProducts = () => {
  const { categories } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const category = e.target.value;
    if (!category) return;
    if (category === "All") {
      dispatch(productActions.fetchProducts());
    } else {
      dispatch(filerProducts(category));
    }
  };

  const fetchProductCategories = () => {
    dispatch(productActions.fetchProductCatgories());
  };

  useEffect(() => {
    fetchProductCategories();
  }, []);

  return (
    <div className={styles.filterContainer}>
      <select className={styles.inputContainer} onChange={onChange}>
        {categories && categories.length
          ? [
              <option key={categories.length + 1} defaultValue="All">
                All
              </option>,
              ...categories.map((category, index) => (
                <option key={index} value={category}>
                  {`<=${category}`}
                </option>
              )),
            ]
          : null}
      </select>
    </div>
  );
};

export default FilterProducts;
