require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 8000;

//몽고디비 연결
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to mongodb'))
  .catch(() => console.log('mongodb connection failed'));

//4) LISTEN
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
