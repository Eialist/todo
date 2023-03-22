import { fetchCollection } from "../mongo/todoMongoClient.js";

export function saveTodo(todo) {
    const critera = { title: todo.title }; 
    const data = { $set: todo };

    return fetchCollection("todo").updateOne(critera, data, {upsert: true});
}

export function fetchAllTodos() {
    // const allTodos = fetchCollection("todo").find().toArray();
    // console.log(allTodos);
    return fetchCollection("todo").find().toArray();
}

export function fetchTodo(query) {
    return fetchCollection("todo").findOne(query);
}

export function deleteTodo(title) {
    return fetchCollection("todo").deleteOne({ title: title });
}

