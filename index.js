const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRouter = require('./routes/users');
const adminsRouter = require('./routes/admins');
const managersRouter = require('./routes/managers');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
db = mongoose.connect(process.env.MONGO_URI)
  /*.then(() => console.log('Connected to MongoDB ...'))
  .catch(err => console.error('Could not connect to MongoDB', err));*/
  if(db){
    console.log("Connected..")
  }


// Routes
app.use('/api/users', usersRouter);
app.use('/api/admins', adminsRouter);
app.use('/api/managers', managersRouter);

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
