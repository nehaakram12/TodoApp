//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

// ----- todo routes ----

const {
	getAllTodos,
	postOneTodo,
	deleteTodo,
	editTodo
} = require('./APIs/todos');

app.get('/todos', auth, getAllTodos);
app.post('/todo', auth, postOneTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.put('/todo/:todoId', auth, editTodo);

// ----- user routes ----

const {
	loginUser,
	signUpUser,
	uploadProfilePhoto,
	getUserDetail,
	updateUserDetails
} = require('./APIs/users');

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);
