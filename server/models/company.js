const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    accounts: [{ type: mongoose.Schema.ObjectId, ref: 'Account' }],
});

module.exports = mongoose.model('Company', CompanySchema);
