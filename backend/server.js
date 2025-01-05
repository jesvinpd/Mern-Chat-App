const express = require('express');
const http = require('http');
const cors = require("cors");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const { error } = require('console');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((e) => {
    console.error("MongoDb connection error: ", e);
  });

const PORT = process.env.PORT;
server.listen(PORT,()=>{
    console.log(`backend server is running on port: ${PORT}`);
})