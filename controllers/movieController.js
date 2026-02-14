// In-memory database
const movies = [];

// Get all movies
const getAllMovies = (req, res) => {
  res.json(movies);
};

// Get movie by ID
const getMovieById = (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  res.json(movie);
};

// Create movie
const createMovie = (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year
  };

  movies.push(movie);
  res.status(201).json(movie);
};

// Update movie
const updateMovie = (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  movie.title = req.body.title;
  movie.genre = req.body.genre;
  movie.year = req.body.year;

  res.json(movie);
};

// Delete movie
const deleteMovie = (req, res) => {
  const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  const deletedMovie = movies.splice(movieIndex, 1);

  res.json(deletedMovie);
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};