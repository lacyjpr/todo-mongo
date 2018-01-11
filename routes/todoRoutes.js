const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Todo = mongoose.model('todos');

module.exports = app => {
  app.get('/api/todos', requireLogin, async (req, res) => {
    const todos = await Todo.find({ _user: req.user.id });
  });

  res.send(todos);
};
