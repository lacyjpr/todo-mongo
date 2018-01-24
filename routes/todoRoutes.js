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
    Todo.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true },
      (err, updates) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Some Error',
            error: err,
          });
        }
        return res.json({
          success: true,
          message: 'Updated successfully',
          updates,
        });
      }
    );
  });

  app.delete('/api/todos/:id', requireLogin, (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, _id) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error' });
      }

      return res.json({
        success: true,
        message: _id + ' deleted successfully',
      });
    });
  });
};
