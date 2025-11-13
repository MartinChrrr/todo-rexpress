import { Request, Response } from "express";
import TodoModel from "../models/todo.model";
import todoModel from "../models/todo.model";

export async function getAllTodos(req: Request, res: Response) {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
  }
}

export async function createTodo(req: Request, res: Response) {
    try {
        const { title } = req.body;
        const newItem = await todoModel.create({ title });
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
  }
}

export async function getTodo(req: Request, res: Response) {
    try {
        const todo = await TodoModel.findById(req.params.id)
        res.json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const todo = await TodoModel.findByIdAndUpdate(req.params.id, req.body)
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
}

export async function deleteTodo(req: Request, res: Response) {
    try {
        const todo = await TodoModel.findByIdAndDelete(req.params.id)
        const todos = await TodoModel.find();
        res.json(todos);
  } catch (error) {
        console.error(error);
        res.status(500).send("Erreur serveur");
  }
}