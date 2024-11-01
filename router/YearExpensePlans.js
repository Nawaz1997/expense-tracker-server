const router = require('express').Router();
const YearExpensePlan = require('../models/YearExpensePlan');

// create a year_expense_plan
router.post('/', async (req, res) => {
    const newPlan = new YearExpensePlan(req.body);
    try {
        const savedPlan = await newPlan.save();
        res.status(200).json(savedPlan);
    } catch (err) {
        res.status(500).json(err);   
    }
})

// get all year_expense_plans (for admin)
router.get('/', async (req, res) => {
    try {
        const allYearPlans = await YearExpensePlan.find();
        res.status(200).json(allYearPlans);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all_year_expense_plans (for a particular user)
router.get('/:UserId', async (req, res) => {
    try {
        const allYearPlans = await YearExpensePlan.find({UserId: req.params.UserId});
        res.status(200).json(allYearPlans);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete a year_expense_plan
router.delete('/:id', async (req, res) => {
    try {
        await YearExpensePlan.findByIdAndDelete(req.params.id);
        res.status(200).json('Month expense plan has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
}) 

module.exports = router;