/** @format */

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuoteBox from './QuoteBox';

function App() {
  const [quotestatement, setquotestatement] = useState('');
  const [fetchNewQuote, setfetchNewQuote] = useState(false);
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  const color = Math.floor(Math.random() * colors.length);

  useEffect(() => {
    async function fetchData() {
      const fetchQuoteData = await axios.get(
        ' https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      setquotestatement(
        fetchQuoteData.data.quotes[Math.floor(Math.random() * fetchData.data.quotes.length)]
      );
    }
    fetchData();
  }, [fetchNewQuote]);

  return (
    <div className="App card" style={{ backgroundColor: `${colors[color]}`, color: 'whitesmoke' }}>
      <QuoteBox
        color={`${colors[color]}`}
        fetchNewQuote={fetchNewQuote}
        quote={quotestatement}
        setfetchNewQuote={setfetchNewQuote}
      />
    </div>
  );
}

export default App;
