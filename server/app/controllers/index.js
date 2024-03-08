const pool = require('../modals/db')
const { create_users_todo, get_todo, delete_todo, update_todo } = require('../modals/dbControllerToDo')
// ---------------------APIS--------------------------------------//

const createTodo = async (req, res) => {
  create_users_todo(req, res)
};

const getTodo = async (req, res) => {
  get_todo(req, res)
};

const updateTodo = async (req, res) => {
  update_todo(req, res)
}

const deleteTodo = async (req, res) => {
  delete_todo(req, res)
};

module.exports = { createTodo, getTodo, deleteTodo, updateTodo }
