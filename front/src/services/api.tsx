import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getTodos = () => api.get("/"); // GET /
export const getTodo = (id: string) => api.get(`/todo/${id}`);
export const createTodo = (data: { title: string }) => api.post("/", data);
export const updateTodo = (id: string, data: { title?: string; done?: boolean }) =>
  api.put(`/todo/${id}`, data);
export const deleteTodo = (id: string) => api.delete(`/todo/${id}`);

export default api;