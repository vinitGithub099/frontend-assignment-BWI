import { productAPI } from "@/api/productsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const productActions = {
  fetchProducts: createAsyncThunk(
    "product/fetchProducts",
    async (args, thunkAPI) => {
      try {
        const response = await productAPI.fetchProducts();
        return response.products;
      } catch (error) {
        /* console.error("Error fetching products: ", error); */
        throw error;
      }
    }
  ),
  searchProducts: createAsyncThunk(
    "product/searchProducts",
    async (searchQuery, thunkAPI) => {
      try {
        const response = await productAPI.searchProducts(searchQuery);
        return response.products;
      } catch (error) {
        /* console.error("Error fetching products: ", error); */
        throw error;
      }
    }
  ),
  fetchProductCatgories: createAsyncThunk(
    "product/fetchProductCatgories",
    async (args, thunkAPI) => {
      try {
        const response = await productAPI.fetchProductCatgories();
        return response;
      } catch (error) {
        /* console.error("Error fetching products: ", error); */
        throw error;
      }
    }
  ),
  fetchCategoryProducts: createAsyncThunk(
    "product/fetchCategoryProducts",
    async (category, thunkAPI) => {
      try {
        const response = await productAPI.fetchCategoryProducts(category);
        return response.products;
      } catch (error) {
        /* console.error("Error fetching products: ", error); */
        throw error;
      }
    }
  ),
};
