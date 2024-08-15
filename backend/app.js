const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const url = 'mongodb://db:27017';
const dbName = 'test_db';

let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Could not connect to MongoDB:', err);
        return;
    }
    db = client.db(dbName);
    console.log('Connected to MongoDB');
});

app.get('/api/message', (req, res) => {
    const collection = db.collection('messages');
    collection.findOne({}, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        } else {
            res.send({ message: result.message });
        }
    });
});

app.listen(3000, () => {
    console.log('Backend API is running on port 3000');
});

