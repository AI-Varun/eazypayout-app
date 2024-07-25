const mongoose = require('mongoose');
const Company = require('./models/company');
const Account = require('./models/account');

mongoose.connect('mongodb://localhost:27017/transactions')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const addData = async () => {
    try {
        await Company.deleteMany({});
        await Account.deleteMany({});

        const accounts = [
            new Account({
                name: 'Account 1',
                transactions: [
                    { date: new Date('2024-07-05T01:04:00'), credit: 21337, balance: 21337, utrRrn: '1000000', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-07-06T10:10:00'), credit: 1000, balance: 22337, utrRrn: '1000001', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-07-07T14:15:00'), credit: 2000, balance: 24337, utrRrn: '1000002', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-07-08T16:20:00'), credit: 1500, balance: 25837, utrRrn: '1000003', accountNoUpi: 'AC0CF7RRUY407QHU' },
                ],
            }),
            new Account({
                name: 'Account 2',
                transactions: [
                    { date: new Date('2024-05-04T12:38:00'), credit: 21337, balance: 21337, utrRrn: 'CMS4136431811', accountNoUpi: '0104SLNEFTPL' },
                    { date: new Date('2024-05-05T09:45:00'), credit: 1200, balance: 22537, utrRrn: 'CMS4136431812', accountNoUpi: '0104SLNEFTPL' },
                    { date: new Date('2024-05-06T11:50:00'), credit: 1500, balance: 24037, utrRrn: 'CMS4136431813', accountNoUpi: '0104SLNEFTPL' },
                    { date: new Date('2024-05-07T15:55:00'), credit: 1700, balance: 25737, utrRrn: 'CMS4136431814', accountNoUpi: '0104SLNEFTPL' },
                    { date: new Date('2024-05-08T18:00:00'), credit: 1800, balance: 27537, utrRrn: 'CMS4136431815', accountNoUpi: '0104SLNEFTPL' },
                ],
            }),
            new Account({
                name: 'Account 3',
                transactions: [
                    { date: new Date('2024-03-28T17:09:00'), credit: 21337, balance: 21337, utrRrn: 'CMS4019645011', accountNoUpi: 'ACT861VM9RR67Z5C' },
                    { date: new Date('2024-03-29T10:05:00'), credit: 1300, balance: 22637, utrRrn: 'CMS4019645012', accountNoUpi: 'ACT861VM9RR67Z5C' },
                    { date: new Date('2024-03-30T12:10:00'), credit: 1700, balance: 24337, utrRrn: 'CMS4019645013', accountNoUpi: 'ACT861VM9RR67Z5C' },
                    { date: new Date('2024-03-31T14:15:00'), credit: 1200, balance: 25537, utrRrn: 'CMS4019645014', accountNoUpi: 'ACT861VM9RR67Z5C' },
                ],
            }),
            new Account({
                name: 'Account 4',
                transactions: [
                    { date: new Date('2024-03-28T17:09:00'), credit: 5015.69, balance: 5015.69, utrRrn: 'CMS3956666735', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-29T11:05:00'), credit: 1500, balance: 6515.69, utrRrn: 'CMS3956666736', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-30T13:10:00'), credit: 2000, balance: 8515.69, utrRrn: 'CMS3956666737', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-31T15:20:00'), credit: 1800, balance: 10315.69, utrRrn: 'CMS3956666738', accountNoUpi: 'AC0CF7RRUY407QHU' },
                ],
            }),
            new Account({
                name: 'Account 5',
                transactions: [
                    { date: new Date('2024-03-19T23:33:00'), credit: 5015.69, balance: 5015.69, utrRrn: 'CMS3948064984', accountNoUpi: 'ACT861VM9RR67Z5C' },
                    { date: new Date('2024-03-20T09:00:00'), credit: 1200, balance: 6215.69, utrRrn: 'CMS3948064985', accountNoUpi: 'ACT861VM9RR67Z5C' },
                    { date: new Date('2024-03-21T11:15:00'), credit: 1500, balance: 7715.69, utrRrn: 'CMS3948064986', accountNoUpi: 'ACT861VM9RR67Z5C' },
                    { date: new Date('2024-03-22T13:30:00'), credit: 2000, balance: 9715.69, utrRrn: 'CMS3948064987', accountNoUpi: 'ACT861VM9RR67Z5C' },
                ],
            }),
            new Account({
                name: 'Account 6',
                transactions: [
                    { date: new Date('2024-03-19T23:33:00'), credit: 16000, balance: 16000, utrRrn: 'CMS3938564916', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-20T09:10:00'), credit: 2000, balance: 18000, utrRrn: 'CMS3938564917', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-21T11:20:00'), credit: 1500, balance: 19500, utrRrn: 'CMS3938564918', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-22T12:25:00'), credit: 1700, balance: 21200, utrRrn: 'CMS3938564919', accountNoUpi: 'AC0CF7RRUY407QHU' },
                    { date: new Date('2024-03-23T14:30:00'), credit: 1300, balance: 22500, utrRrn: 'CMS3938564920', accountNoUpi: 'AC0CF7RRUY407QHU' },
                ],
            }),
        ];

        const companies = [
            new Company({ name: 'Company 1', accounts: [accounts[0]._id, accounts[1]._id] }),
            new Company({ name: 'Company 2', accounts: [accounts[2]._id, accounts[3]._id] }),
            new Company({ name: 'Company 3', accounts: [accounts[4]._id, accounts[5]._id] }),
        ];

        await Promise.all(accounts.map(account => account.save()));
        await Promise.all(companies.map(company => company.save()));

        console.log('Data added successfully');
        process.exit();
    } catch (error) {
        console.error('Error in added data:', error);
        process.exit(1);
    }
};

addData();
