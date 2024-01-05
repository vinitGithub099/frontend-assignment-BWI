import { productActions } from "./actions";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  products: [],
  error: null,
  categories: [100, 500, 1000, 2000],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filerProducts: (state, action) => {
      state.products = state.products.filter(
        (product) => product.price < action.payload
      );
    },
  },
  extraReducers: (builder) => {
    /* fetchProducts */
    builder.addCase(productActions.fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(productActions.fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(productActions.fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    /* searchProducts */
    builder.addCase(productActions.searchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      productActions.searchProducts.fulfilled,
      (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      }
    );
    builder.addCase(productActions.searchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { filerProducts } = productSlice.actions;
export default productSlice.reducer;
