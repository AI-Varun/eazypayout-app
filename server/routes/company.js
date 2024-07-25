const express = require('express');
const router = express.Router();
const Company = require('../models/company');

router.get('/', async (req, res, next) => {
    const companies = await Company.find().populate('accounts').catch(next);
    if (!companies) return res.status(404).json({ message: 'Companies not found' });
    res.json(companies);
});

module.exports = router;
