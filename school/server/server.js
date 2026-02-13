const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cohort-school')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/courses', require('./routes/courses'));
app.use('/cohorts', require('./routes/cohorts'));
app.use('/admin', require('./routes/admin'));
app.use('/student', require('./routes/student'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Cohort School API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});