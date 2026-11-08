import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import logger from 'pino-http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

app.get('/notes', (req, res) => {
  res.status(200);
  res.json({
    message: 'Retrieved all notes',
  });
});

app.get('/notes/:noteId', (req, res) => {
  res.status(200);
  res.json({
    message: `Retrieved note with ID: ${req.params.noteId}`,
  });
});

app.use((req, res) => {
  res.status(404);
  res.json({
    message: 'Route not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    message: `${err.message}`,
  });
});

app.listen(process.env.PORT);
