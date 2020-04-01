const express = require('express');
const buckets = require('./buckets');

const app = express();
app.use(express.json());

app.get('/list', async (req, res) => {
  try {
    const { Contents } = await buckets.bucket1.listObjects()
    res.json(Contents);
  } catch (error) {
    res.status(400).json(JSON.stringify(error));
  }
});

app.post('/upload', async (req, res) => {
  try {
    const { Location } = await buckets.bucket1.upload(req.body.filename);
    res.json({ Location });
  } catch (error) {
    res.status(400).json(JSON.stringify(error));
  }
});

app.post('/get', async (req, res) => {
  try {
    const { File } = await buckets.bucket1.getObject(req.body.fileKey);
    res.json({ File });
  } catch (error) {
    res.status(400).json(JSON.stringify(error));
  }
});

app.listen(3000, () => console.log('server running'));
