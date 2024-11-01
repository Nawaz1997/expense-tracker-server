const express = require("express").Router();
const User = require("../models/User");
const router = require("./Expenses");
const bcrypt = require("bcrypt");

// get all users (for admin)
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get an user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update user
router.put('/:id', async (req, res) => {
    try {
        if(req.body.password){
            try {
                // generate new password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                res.status(500).json(err);
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.status(200).json('Account has been updated');
            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete user
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Account has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;