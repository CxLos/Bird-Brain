require('dotenv').config();
const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://cxlos:c6uinQzP6UjGcwS2@cluster0.6bz6oix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = process.env.MONGODB_URI;
const uri2 = process.env.MONGO_URI;

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

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {

//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {

//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bird-brain', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0/0/bird-brain', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://136.49.66.51/bird-brain', {
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bird-brain', {

//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   family: 4,
// });

mongoose.connect(uri, {
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