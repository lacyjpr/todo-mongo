const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  item: String,
  createdAt: Date,
  completed: Boolean,
  completedAt: Date,
  edited: Boolean,
  editedAt: Date,
});

mongoose.model('todos', todoSchema);
