require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('../../models/tour');

//몽고디비 연결
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to mongodb'))
  .catch(() => console.log('mongodb connection failed'));

//READ JSON FILES
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf8')
);

//IMPORT DATA INTO DATABASE
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully imported');
  } catch (err) {
    console.log(err);
  }
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Tour.deleteMany(); //collection에 있는 모든 document를 삭제한다.
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') importData();
if (process.argv[2] === '--delete') deleteData();
