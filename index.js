const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());

const MONGODB_URI = '';

app.use(express.json());
const PORT = 3001;
app.listen(PORT, () => console.log('Server is active on port ' + PORT));
mongoose.Promise = Promise;
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);
    console.log('mongodb connection established');
  }
);
app.options('*', cors());
app.use('/electric', require('./src/routes/prevmonthbill'));
