require('dotenv').config();
const mongoose = require('mongoose');
const uri = 'mongodb://cxlos:c6uinQzP6UjGcwS2:27017/bird-brain';

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,
//     autoIndex: false, // Don't build indexes
//     maxPoolSize: 10, // Maintain up to 10 socket connections
//     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
// }

// const connectWithDB = () => {
//   mongoose.connect(uri, options, (err, db) => {
//     if (err) console.error(err);
//     else console.log("database connection")
//   })
// }

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bird-brain', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0/0/bird-brain', {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://136.49.66.51/bird-brain', {
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bird-brain', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

// Check for successful connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB!🥬');
});

// Check for connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;
// module.exports = connectWithDB.connection;
