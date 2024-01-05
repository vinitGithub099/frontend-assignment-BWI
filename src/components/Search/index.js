import { productActions } from "@/store/features/Product/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";

const SearchProducts = () => {
  /* implement debounce feature here */

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const searchQuery = e.target.value;
    setDebouncedTerm(searchQuery);
  };

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      dispatch(productActions.searchProducts(searchTerm));
    } else {
      dispatch(productActions.fetchProducts());
    }
  }, [searchTerm]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputContainer}
        type="text"
        name="search"
        placeholder="@Search"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchProducts;
