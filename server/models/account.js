const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    transactions: [
        {
            date: { type: Date, required: true },
            credit: { type: Number, required: true },
            balance: { type: Number, required: true },
            utrRrn: { type: String, required: true },
            accountNoUpi: { type: String, required: true },
        },
    ],
});

module.exports = mongoose.model('Account', AccountSchema);
