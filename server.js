require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/urls', (req, res) => {
  const fileURL = process.env.FILE_URL;
  const sheetURL = process.env.SHEET_URL;
  res.json({ fileURL, sheetURL });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
