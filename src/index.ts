import express from 'express';
import mongoose from 'mongoose';
import router from './router'; 
import path = require('path');

 
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Routes 
app.use('/', router);
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/UMS-TYPESCRIPT', {
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/users`);
});
  