import BASE_URL from "./configs";

export const userAPI = {
  loginUser: async (data) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  },
};
