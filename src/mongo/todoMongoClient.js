import { MongoClient } from "mongodb";

let db = undefined;
const dbName = "todo";
const username = "eia-todo";
const password = "********";

export function fetchCollection(name) {
    // const collection = fetchDatabase().collection(name);
    // console.log(collection);
    return fetchDatabase().collection(name);
}

function fetchDatabase() {
    if (db != undefined) {
        return db; 
    }

const url = `mongodb+srv://${username}:${password}@todo.xjfvzge.mongodb.net/?retryWrites=true&w=majority`; 
const client = new MongoClient(url);

db = client.db(dbName); 

// console.log(db);
return db; 
};
