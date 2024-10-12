const URL = "https://v2.api.noroff.dev/online-shop";

// Function to fetch all products from the API
export const fetchProducts = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Function to fetch a single product by its ID
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
