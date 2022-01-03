const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Date },
    affiche: { type: String }
});

const Film = mongoose.model('Film', FilmSchema);
module.exports = Film;