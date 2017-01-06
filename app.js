//step1
var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

//Step3
var Sequelize = require('sequelize');
var models = require('./models'); ///needed to run the below

//console.log(models.TodoItem);
/* Step3 - Run these in CLI sfter above Step3
 -  sequelize model:create --name TodoItem --attributes 'task:string,done:boolean'
 -  sequelize db:migrate 
 */
//step3
models.TodoItem.create({
    task: "Watch Rogue One",
    done: false
});

//ALTERNATIVE BULK INSERT
models.TodoItem.bulkCreate(
    [{
            task: "Wash dog",
            done: false
        },
        {
            task: "Wash car",
            done: false
        },
        {
            task: "Dance Like Nobody's Watching",
            done: false
        }
    ]
);




/*
//Step3
var TodoItem = new Sequelize.define('todoitem', {
    task: Sequelize.STRING,
    done: Sequelize.BOOLEAN
});

//Step3
TodoItem.sync({ force: true }).then(function() {
    return TodoItem.create({
        task: "watch Rogue one",
        done: false
    });
});
*/

//Step1
app.get('/', function(req, res) {
    //grab all todos
    res.send('ToDoList');
})

//Step2: CONTROLLERS
app.post('/todos/', function(req, res) {
    //add a new todo
    res.send('Add');
})

//Step2: CONTROLLERS
app.put('/todos/:id', function(req, res) {
    //update a todo with specificid
    res.send('update');
})

//Step2: CONTROLLERS
app.delete('/todos/:id', function(req, res) {
    //delete a todo with specificid
    res.send('delete');
})





//step1
app.listen(PORT, function() {
    console.log('24k Magic happens oon port ' + PORT);
});