//index.js

const functions = require('firebase-functions');
const app = require('express')();

// ----- todo routes ----

const {
	getAllTodos,
	postOneTodo,
	deleteTodo,
	editTodo
} = require('./APIs/todos');

app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todo/:todoId', deleteTodo);
app.put('/todo/:todoId', editTodo);

// ----- user routes ----

const { loginUser } = require('./APIs/users');

// Users
app.post('/login', loginUser);

exports.api = functions.https.onRequest(app);
