const mongoose = require('mongoose');

const YearExpensePlanSchema = new mongoose.Schema(
    {
        UserId: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        yearly_income: {
            type: String,
            required: true,
        },
        all_category: {
            type: String,
            required: true,
        },
        food: {
            type: String,
            required: true,
        },
        travel: {
            type: String,
            required: true,
        },
        health: {
            type: String,
            required: true,
        },
        accommodation: {
            type: String,
            required: true,
        },
        entertainment: {
            type: String,
            required: true,
        },
        miscellaneous: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('YearExpensePlan', YearExpensePlanSchema);
