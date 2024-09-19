import axios from "axios";
const baseUrl = "http://localhost:3001/books";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then((response) => {
    console.log(response.data); // Log to inspect what is returned
    return response.data; // Assuming the updated book object is in response.data
  });
};
const deleteBook = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  deleteBook: deleteBook,
};
