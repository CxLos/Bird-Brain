require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bird-brain', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bird-brain', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/bird-brain', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bird-brain', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = mongoose.connection;
