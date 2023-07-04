import express from 'express';
// import dotenv from 'dotenv';

import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Express app');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
