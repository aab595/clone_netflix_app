const express = require('express');
const router = express.Router();
const controller = require('../controllers/FilmController');

router.get('/', controller.getAllFilm);

module.exports = router;
