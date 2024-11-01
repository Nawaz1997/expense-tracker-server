const router = require('express').Router();
const MonthExpensePlan = require('../models/MonthExpensePlan');

// create a month_expense_plan
router.post('/', async (req, res) => {
    const newPlan = new MonthExpensePlan(req.body);
    try {
        const savedPlan = await newPlan.save();
        res.status(200).json(savedPlan);
    } catch (err) {
        res.status(500).json(err);   
    }
})

// get all month_expense_plans (for admin)
router.get('/', async (req, res) => {
    try {
        const allMonthPlans = await MonthExpensePlan.find();
        res.status(200).json(allMonthPlans);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get all_month_expense_plans (for a particular user)
router.get('/:UserId', async (req, res) => {
    try {
        const allMonthPlans = await MonthExpensePlan.find({UserId: req.params.UserId});
        res.status(200).json(allMonthPlans);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete a month_expense_plan
router.delete('/:id', async (req, res) => {
    try {
        await MonthExpensePlan.findByIdAndDelete(req.params.id);
        res.status(200).json('Month expense plan has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
}) 

module.exports = router;