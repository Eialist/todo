import express from 'express';
import { fetchAllTodos, saveTodo } from '../service/todoService.js';

const router = express.Router();

//Hämta alla todo
router.get("/todo/", async (req, res) => {
    const allTodos = await fetchAllTodos();
    console.log(allTodos)
    res.send(allTodos);
    // fetchAllTodos().then((data) => {
    //     console.log(data);
    //     res.send(data);
    // })
});

//Hämta en todo
router.get("/todo/:id", (req, res) => {
});

//Skapa ny todo
router.put("/todo/", async (req, res) => {
    const todo = req.body; 
    console.log(todo);
    const result = await saveTodo(todo);

    const resData = {
        content: todo
    };

    if (result.upsertedId != null) {
        resData.id = result.upsertedId;
        resData.event = "Created new todo"
    } else {
        resData.event = "Updated todo"
    }

    res.send(resData);
});

//Uppdatera todo
router.put("/todo/:id", (req, res) => {

});

//Ta bort todo
router.delete("/todo/:id", (req, res) => {

});

export default router;