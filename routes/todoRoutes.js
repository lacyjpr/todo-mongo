const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Todo = mongoose.model('todos');

module.exports = app => {
  app.get('/api/todos', requireLogin, async (req, res) => {
    const todos = await Todo.find({ _user: req.user.id });
    res.send(todos);
  });

  app.post('/api/todos', requireLogin, async (req, res) => {
    const { item, completed, completedAt, edited, editedAt } = req.body;

    const todo = new Todo({
      _user: req.user.id,
      item,
      createdAt: Date.now(),
      completed,
      completedAt,
      edited,
      editedAt,
    });

    await todo.save();
    res.json({ todo });
  });

  app.put('/api/todos', requireLogin, (req, res) => {
    Todo.findById(req.params._id, (err, todo) => {
      if (err) {
        res.status(500).send(err);
      } else {
        todo._user = req.body._user || todo._user;
        todo.item = req.body.item || todo.item;
        todo.createdAt = req.body.createdAt || todo.createdAt;
        todo.completed = req.body.completed || todo.completed;
        todo.completedAt = req.body.completedAt || todo.completedAt;
        todo.edited = req.body.edited || todo.edited;
        todo.editedAt = req.body.editedAt || todo.editedAt;

        todo.save((err, todo) => {
          if (err) {
            res.status(500).send(err);
          }
          res.json({ todo });
        });
      }
    });
  });
};
