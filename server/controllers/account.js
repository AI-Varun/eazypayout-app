const Company = require('../models/company');
const Account = require('../models/Account');

const getAccountsByCompany = async (req, res) => {
    const { companyId } = req.params;

    try {
        const company = await Company.findById(companyId).populate({
            path: 'accounts',
            select: 'name'
        }).exec();

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company.accounts);
    } catch (error) {
        console.error('Error fetching accounts by company:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAccountDetails = async (req, res) => {
    const { accountId } = req.params;

    try {
        const account = await Account.findById(accountId).exec();

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.json(account);
    } catch (error) {
        console.error('Error fetching account details:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAccountsByCompany,
    getAccountDetails
};
