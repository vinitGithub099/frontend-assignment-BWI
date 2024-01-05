import BASE_URL from "./configs";

export const productAPI = {
  fetchProducts: async () => {
    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  },
  searchProducts: async (searchQuery) => {
    try {
      const res = await fetch(`${BASE_URL}/products/search?q=${searchQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  },
};
