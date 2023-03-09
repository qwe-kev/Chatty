const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const {chats} = require('./data/data');

const app = express();

app.get('/', (req, res) => {
    res.send('welcome to chatty')
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
})

app.listen(PORT, () => {
    console.log(`open on port ${PORT}`)
})