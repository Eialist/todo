import express from 'express';
import router from './src/router/router.js';
import cors from 'cors';
import { fetchAllTodos } from './src/service/todoService.js';

const addr = "127.0.0.1";
const port = 3030;

const app = express();

app.use(cors());
app.use(express.json()); // <-- in-data går från json till javascript

app.get("/todo/", async (req, res) => {
    fetchAllTodos().then((data) => {
        console.log(data);
        res.send(data);
    })
    
});

app.get("/health", (req, res) => {
    res.send({state: "up", message: "Server is healthy"})
});

app.use("/api", router);

app.listen(port, () => {
    console.log("server listening on port: " + port);
}); 