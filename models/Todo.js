const mongoose = require('mongoose');
const { Schema } = require('schema');

const todoSchema = new Schema({
  _user: { type: Schema.Types.ObjectIs, ref: 'User' },
  todo: String,
  completed: Boolean,
  completedAt: Date,
  edited: Boolean,
  editedAt: Date,
});

mongoose.model('todos', todoSchema);
