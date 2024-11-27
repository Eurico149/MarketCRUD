const router = require('express').Router();
const Merch = require('../models/merch');
const jwt = require('jsonwebtoken');

async function extractUserIdFromToken(req, res, next) {
    // Using Headers:
    // const header = req.headers['authorization'];
    // const token = header && header.split(' ')[1];

    // No Headers:
    const token = req.body.token;

    if (!token) return res.status(401).send({ message: 'Access Denied' });

    try {
        const decoded = await jwt.verify(token, process.env.TokenKey);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(403).send({ message: 'Invalid Token' });
    }
}

router.post('/', extractUserIdFromToken, async (req, res) => {
    const id = req.userId;
    const merchandise = await Merch.find({userId: id});
    res.status(200).json(merchandise);
});

router.post('/registerMerch', extractUserIdFromToken, async (req, res) => {

});

module.exports = router;
