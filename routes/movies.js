const express = require('express');
const router = express.Router();

const validateMovie = require('../middleware/validateMovie');
const {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', validateMovie, createMovie);
router.put('/:id', validateMovie, updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;