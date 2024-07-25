const express = require('express');
const router = express.Router();
const {
    getAccountsByCompany,
    getAccountDetails,
} = require('../controllers/account');

router.get('/:companyId/accounts', getAccountsByCompany);

router.get('/accounts/:accountId', getAccountDetails);

module.exports = router;
