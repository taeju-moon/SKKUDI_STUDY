const express = require('express');
const morgan = require('morgan');

const app = express();

//1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); //static파일 불러오기 -> http://127.0.0.1:8000/overview.html처럼 접근 가능

//3) Router
const tourRouter = require('./routes/tourRoutes');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//404
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404)); //모든 미들웨어를 제치고 Error Middleware로 갈 것임
});

//Error Middleware
app.use(globalErrorHandler);

module.exports = app;
