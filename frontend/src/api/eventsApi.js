import axios from "axios";

// Use environment variable for API base URL
const API_BASE_URL = "http://api.syncory.aksumiteplatforms.tech/api/v1/";

// Get all events
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

// Get a single event
export const getEvent = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
};

// Create an event
export const createEvent = async (eventData) => {
  const token = localStorage.getItem("authToken");
  const response = await axios.post(
    `${API_BASE_URL}events`,
    eventData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const uploadThumbnail = async (formData) => {
  const token = localStorage.getItem("authToken");
  const response = await axios.post(
   `${API_BASE_URL}upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

// Update an event
export const updateEvent = async (id, eventData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}events/${id}`, eventData);
    return response.data;
  } catch (error) {
    console.error("Error updating event:", error);
    throw error.response?.data || error.message;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error.response?.data || error.message;
  }
};

// Search events
export const searchEvents = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}events/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching events:", error);
    throw error;
  }
};

// Get events by category
export const getEventsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}events/category/${category}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events by category:", error);
    throw error;
  }
};

// Get events by location
export const getEventsByLocation = async (location) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}events/location/${location}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events by location:", error);
    throw error;
  }
};

// Get events by date
export const getEventsByDate = async (date) => {
  try {
    const response = await axios.get(`${API_BASE_URL}events/date/${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events by date:", error);
    throw error;
  }
};

// Get events by user
export const getEventsByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}events/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events by user:", error);
    throw error;
  }
};

// Get events by user attending
export const getEventsByUserAttending = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}events/attending/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events by user attending:", error);
    throw error;
  }
};
