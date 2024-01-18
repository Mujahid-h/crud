import axios from "axios";

const URL = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(`Error while calling addUser API:`, error);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${URL}/all`);
    console.log("Response from getUser API:", response);
    return response.data;
  } catch (error) {
    console.log("Error while calling the getUser API:", error);
  }
};

export const loadUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling loadUser API:`, error);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log(`Error while calling editUser API:`, error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling deleteUser API:`, error);
  }
};
