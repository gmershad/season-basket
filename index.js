const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json("Welcome to Season Basket")
})

app.listen(8080, () => {
    console.log('Season Basket Catalog is Listening to Port 8080')
})