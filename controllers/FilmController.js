const Film = require('../models/Film')

exports.getAllFilm = async (req, res) => {
    try {
        const films = await Film.find();
        res.json({
            films
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
}