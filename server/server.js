const express = require('express');
// const axios = require('axios');
// const db = require('../database/.database.js')

const app = express();
const PORT = 3003;

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});
