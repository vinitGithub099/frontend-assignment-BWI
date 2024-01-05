import FilterProducts from "@/components/Filter";
import Navbar from "@/components/Navbar";
import SearchProducts from "@/components/Search";
import { productActions } from "@/store/features/Product/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product/index";
import isAuth from "./auth";
import styles from "./index.module.css";

const HomePage = (props) => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const getAllProducts = () => {
    dispatch(productActions.fetchProducts());
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <Navbar></Navbar>
      <div className={styles.formContainer}>
        <SearchProducts></SearchProducts>
        <FilterProducts></FilterProducts>
      </div>
      {loading ? (
        <div className={styles.loadingContainer}>Loading..</div>
      ) : (
        <div className={styles.productsContainer}>
          {products && products.length ? (
            products.map((product) => (
              <Product key={product.id} {...product}></Product>
            ))
          ) : (
            <div className={styles.fallBackMessage}>
              Oops! No products to show
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default isAuth(HomePage);
// export default HomePage;
