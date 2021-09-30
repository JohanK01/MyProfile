'use strict'

const express = require('express');
const fs = require ('fs');

const app = express();
const PORT = process.env.PORT || 8082;

app.get('/', (req, res) => {
    fs.readFile('Johan.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.send(data);
   
    })
   
})


app.listen(PORT,() => {
    console.log(`the app listen to ${PORT}`);
})
