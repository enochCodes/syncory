import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/v1/";

// Function to get the authentication token
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// getCategories function
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}users/categories`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    throw error;
  }
};

// getOrganizers function
export const getOrganizers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}users/organizers`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching organizers: ", error);
    throw error;
  }
};
