const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;
const responses = require('./src/responses');

app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.get('/api', (req, res) => {
  res.send({
    message: 'Hello World API Codemasters!',
    enpoint: ['/api/lessons', '/api/lessons/sample'],
  });
});

app.get('/api/lessons/sample', (req, res) => {
  res.send(responses.SAMPLE_LESSON_DATA);
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

module.exports = app;
