import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchCompanies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/companies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
};

export const fetchAccounts = async (companyId) => {
    try {
        const response = await axios.get(`${BASE_URL}/accounts/${companyId}/accounts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching accounts:', error);
        throw error;
    }
};

export const fetchAccountDetails = async (accountId) => {
    try {
        const response = await axios.get(`${BASE_URL}/accounts/accounts/${accountId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching account details:', error);
        throw error;
    }
};