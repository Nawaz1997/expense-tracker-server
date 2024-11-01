const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Registration of a user
router.post('/signup', async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            gender: req.body.gender,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login
router.post('/login', async (req, res) => {
    try {
        //checking email
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json('user not found');

        //checking password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json('invalid password');

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;