const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 9000;

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/jimmy-prince-fun-game'
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello from MERN stackkkkkk');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));
// module.exports = { app, PORT };
