import { Router } from "express";
import { getAllTodos, createTodo, updateTodo, deleteTodo, getTodo } from "../controllers/todo.controller"

const router = Router();

router.get("/", getAllTodos );
router.post("/", createTodo );
router.get("/todo/:id", getTodo );
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;