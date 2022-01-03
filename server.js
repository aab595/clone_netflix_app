require('dotenv').config();
const express = require('express');
const moongoose = require('mongoose');
const FilmRoute = require('./routes/film');

const app = express();

// DB connexion
moongoose.connect(process.env.MONGO_URI)
.then(response => {
    console.log("Successfully connected to mongoDB")
})
.catch(error => console.error(error.message))

// first route
app.use('/', FilmRoute);

app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
})
