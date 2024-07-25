const Company = require('../models/company');

const getCompaniesWithAccounts = async (req, res) => {
    try {
        const companies = await Company.find().populate({
            path: 'accounts',
            select: 'name'
        }).exec();

        res.json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getCompaniesWithAccounts
};
