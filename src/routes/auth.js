const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    try {
        const userBody = req.body.user;
        const passwordBody = req.body.password;
        const user = await User.findOne({user: userBody});

        if (!user) {
            return res.status(400).send({message: 'User Or Password is incorrect'});
        }
        if (!(await bcrypt.compare(passwordBody, user.password))) {
            return res.status(400).send({message: 'User Or Password is incorrect'});
        }
        const token = await jwt.sign({ id: user._id, user: user.user }, process.env.TokenKey, { expiresIn: '2h' });
        return res.status(201).send({token, message: 'Loged In'});
    } catch (error) {
        console.log(error);
    }
})

router.post('/register', async (req, res) => {
    try {
        const {user, password} = req.body;
        if (!user) return res.status(400).send({message: 'Invalid User'});
        if (password.length < 6) return res.status(400).send({message: 'Password must be at least 6 characters'});

        const hashedPassword = await bcrypt.hashSync(password, 10);
        const newUser = new User({user, password: hashedPassword});
        await newUser.save().then(() => res.status(201).send({message: 'User Created Successfully'}));
    } catch (error) {
        res.status(400).send({message: 'Username Already in Use'});
    }
})

module.exports = router;
