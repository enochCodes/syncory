import axios from "axios";

// Use environment variable for API base URL
const API_BASE_URL = "http://api.syncory.aksumiteplatforms.tech/api/v1/";

export const storeAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

// Login function
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}auth/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Register function
export const registerUser = async ({
  username,
  email,
  password,
  role,
  brandName,
  description,
}) => {
  try {
    const payload = {
      username,
      email,
      password,
      role,
      brandName: role === "organizer" ? brandName : undefined,
      description: role === "organizer" ? description : undefined,
    };

    console.log("Payload:", payload); // Log the payload for debugging

    const response = await axios.post(
      `${API_BASE_URL}auth/users/register`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error.response ? error.response.data : error.message;
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
