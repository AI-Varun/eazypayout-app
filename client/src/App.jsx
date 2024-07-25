import React, { useState, useEffect } from 'react';
import BoxArrowIcon from './assets/arrow-down-up.png';
import JournalIcon from './assets/journal-text.png';
import BoxArrowDownIcon from './assets/box-arrow-in-down.png';
import Logo from './assets/logo.png';
import BoxArrowRight from './assets/box-arrow-right.png';
import { fetchCompanies, fetchAccounts, fetchAccountDetails } from './apis/api';

import './App.css';

function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    getCompanies();
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      const getAccounts = async () => {
        try {
          const data = await fetchAccounts(selectedCompany);
          setAccounts(data);
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      };
      getAccounts();
    }
  }, [selectedCompany]);

  useEffect(() => {
    if (selectedAccount) {
      const getAccountDetails = async () => {
        try {
          const data = await fetchAccountDetails(selectedAccount);
          setTransactions(data.transactions);
          if (data.transactions.length > 0) {
            setBalance(data.transactions[0].balance);
          }
        } catch (error) {
          console.error('Error fetching account details:', error);
        }
      };
      getAccountDetails();
    }
  }, [selectedAccount]);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setSelectedAccount('');
    setTransactions([]);
    setBalance(0);
  };

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <img src={Logo} alt="EazyPayouts Logo" className="logo-image" />
        <div className="logo">EazyPayouts</div>
        <nav>
          <ul>
            <li className="active"><img src={BoxArrowDownIcon} className="icon" /> Loads</li>
            <li style={{ 'backgroundColor': '#F8F8F8' }}><img src={JournalIcon} className="stat-icon" /> Statements</li>
            <li>
              <img src={BoxArrowIcon} alt="arrow-in-down" className="icon" />
              Transactions</li>
          </ul>
        </nav>
        <button className="logout"><img src={BoxArrowRight} className="icon" /> Logout</button>
      </aside>

      <main className="main">
        <header className="header">
          <div className="filters">
            <select className="company-select" value={selectedCompany} onChange={handleCompanyChange}>
              <option value="">Select Company</option>
              {companies.map((company) => (
                <option key={company._id} value={company._id}>{company.name}</option>
              ))}
            </select>
            <select className="account-select" value={selectedAccount} onChange={handleAccountChange}>
              <option value="">Select Account</option>
              {accounts.map((account) => (
                <option key={account._id} value={account._id}>{account.name}</option>
              ))}
            </select>
          </div>
        </header>
        <div className="balance">
          <div className="balance-content">
            <img src='/Frame 10.png' alt="Balance Icon" className="balance-image" />
            <div className="balance-text">
              <span className="balance-label">Available Balance</span>
              <span className="balance-amount">₹ {balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
        <section className="transactions">
          <h4>Latest Loads are displayed here</h4>
          <br /><br /><br />
          <table>
            <thead>
              <tr className='row'>
                <th>Date</th>
                <th>Credit</th>
                <th>A/c Balance</th>
                <th>UTR/RRN</th>
                <th>A/c No / UPI</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td>{new Date(tx.date).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}</td>
                  <td className="cred">₹ {tx.credit.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td>₹ {tx.balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td>{tx.utrRrn}</td>
                  <td>{tx.accountNoUpi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;