const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema(
    {
        UserId: {
            type: String,
            required: true,
        },
        item: {
            type: String,
            required: true,
            max: 20,
        },
        price: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
            max: 20,
        },
        category: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
