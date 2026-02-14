const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

const movieRoutes = require('./routes/movies');

app.use('/movies', movieRoutes);
app.listen(8000, () => 
  console.log('Server running successfully on port 8000')
);