const express = require('express');
const { getTodo, createTodo, deleteTodo, updateTodo } = require('../app/controllers/index')
const router = express.Router();

router.get("/get", getTodo);

router.post("/add", createTodo);

router.put("/update/:id", updateTodo);

router.delete("/delete/:id", deleteTodo);

module.exports = router;




