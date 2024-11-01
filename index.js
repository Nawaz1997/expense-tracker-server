const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const expenseRoute = require('./router/Expenses');
const authRoute = require('./router/Auth');
const userRoute = require('./router/Users');
const monthExpensePlanRoute = require('./router/MonthExpensePlans');
const yearExpensePlanRoute = require('./router/YearExpensePlans');

const { DATABASE } = require('./config/keys');
const PORT = 2000;

dotenv.config();

//Database Connection
mongoose
    .connect(DATABASE)
    .then(() => {
        console.log('DATABASE Connected...');
    })
    .catch((err) => {
        console.log(err);
    });

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// routes
app.use('/api/expenses', expenseRoute);
app.use('/api/auth', authRoute);
app.use('/api/', userRoute);
app.use('/api/month-expense-plan',monthExpensePlanRoute);
app.use('/api/year-expense-plan',yearExpensePlanRoute);

app.listen(PORT, () => {
    console.log(`SERVER is running at port ${PORT}`);
});
