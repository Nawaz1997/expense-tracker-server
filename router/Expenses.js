const router = require('express').Router();
const Expense = require('../models/Expense');

// create an expense
router.post('/', async (req, res) => {
    const newExpense = new Expense(req.body);
    try {
        const savedExpense = await newExpense.save();
        res.status(200).json(savedExpense);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all expenses (for admin)
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all expenses (for a particular user)
router.get('/:UserId', async (req, res) => {
    try {
        const allExpenses = await Expense.find({UserId: req.params.UserId});
        res.status(200).json(allExpenses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get expenses by category
// router.get('/:category', async (req, res) => {
//     try {
//         const categoryExpenses = await Expense.find({ category: req.params.category });
//         res.status(200).json(categoryExpenses);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// delete an expense 
router.delete('/:id', async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(200).json('expense has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
