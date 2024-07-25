const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
}));

const companyRoutes = require('./routes/company');
const accountRoutes = require('./routes/account');

app.use('/api/companies', companyRoutes);
app.use('/api/accounts', accountRoutes);
app.use(errorHandler);
mongoose.connect('mongodb://localhost:27017/transactions')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
