const pool = require('./db')

const create_users_todo = async (req, res) => {
    if (!req.body.data) return res.send({ message: " empty todo not acceptable" })
    let sql = `INSERT INTO todo.todo_table(todo, created) VALUES ("${req.body.data.todo}", "${req.body.data.created}");`
    await pool.execute(sql, (err, result) => {
        if (err) res.status(500).send(err)
        res.status(200).send(result)
    })
}
const get_todo = (req, res) => {
    let sql = "SELECT * FROM todo.todo_table"
    try {
        pool.execute(sql, (err, result) => {
            res.status(200).send(result)
        })
    }
    catch (error) {
        console.error('Error executing query:', error);
    }
};

const update_todo = (req, res) => {
    // if (!req.params.id) return res.status(400)
    console.log("hii update api calling", req?.params?.id)
    // let sql = `UPDATE FROM todo.todo_table WHERE id="${req.params.id}";`
    // pool.query(sql, (err, result) => {
    //     if (err) res.status(500).send(err)
    //     res.status(200).send(result)
    // })
}

const delete_todo = (req, res) => {
    if (!req.params.id) return res.status(400)

    let sql = `DELETE FROM todo.todo_table WHERE id="${req.params.id}";`
    pool.query(sql, (err, result) => {
        if (err) res.status(500).send(err)
        res.status(200).send(result)
    })
}
module.exports = { create_users_todo, get_todo, delete_todo, update_todo }
