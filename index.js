const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const testRouter = require('./Routes/test.js');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Express app');
});
app.use('/api/test', testRouter);
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
