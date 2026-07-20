import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { parse } from 'url';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/works', async (req, res) => {
  const parsed = parse(req.url, false);

  const url =
    'https://api.openalex.org/works?api_key=' +
    process.env.API_KEY +
    '&' +
    parsed.query;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});
app.get('/api/authors', async (req, res) => {
  const parsed = parse(req.url, false);
  const url =
    'https://api.openalex.org/authors?api_key=' +
    process.env.API_KEY +
    '&' +
    parsed.query;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});
app.get('/api/authors/:id', async (req, res) => {
  const { id } = req.params;
  const parsed = parse(req.url, false);
  const url =
    `https://api.openalex.org/authors/${id}?api_key=` +
    process.env.API_KEY +
    '&' +
    parsed.query;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});
app.get('/api/topics', async (req, res) => {
  const parsed = parse(req.url, false);
  const url =
    'https://api.openalex.org/autocomplete/topics' + '?' + parsed.query;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});
app.get('/api/institutions', async (req, res) => {
  const parsed = parse(req.url, false);
  const url =
    'https://api.openalex.org/autocomplete/institutions' + '?' + parsed.query;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
});
app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});
