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
    res.redirect('/todoapp');
  });
};
