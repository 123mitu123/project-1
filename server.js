const express = require("express");

//initialization
const app = express();
//application will now use json format for data
app.use(express.json());

const port = 8080;

const toDolist = ["complte node byte", "play cricaket"];

//http://localhost:8080/todos
app.get("/todos", (req, res) => {
    //callback
    res.status(200).send(toDolist);
});

//http://localhost:8080/todos
app.post("/todos", (req,res) => {
    //callback
    let newToDoItem = req.body.item;
    toDolist.push(newToDoItem);
    res.status(200).send( {
        message: "task added successfully",
    });
});

app.delete("/todos", (req,res) => {
    //callback
    const itemToDelete = req.body.item;

    toDolist.find((element, index) => {
        if (element === itemToDelete) {
            toDolist.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `deleted item - ${req.body.item}`,
    });
});

//just some additional examples
//app.get("/todos/create");
//app.post("/todos/create");

//put,patch//all the other methods on a particular route
app.all("/todos", (req,res) => {
    res.status(501).send();
});

//all the other routers
app.all("*", (req,res) => {
    res.status(404).send();
});

app.listen(port, () => {
    //callback
    console.log(`nodejs server started on port ${port}`);
});