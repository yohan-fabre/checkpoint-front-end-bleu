import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from '../components/CountryList';
import CountryDetails from './CountryDetails';

export default function Home() {
  return (
      <Router>
        <div>
          <h1>Hello, wilder !</h1>
          <Routes>
            <Route path="/" exact component={CountryList} />
            <Route path="/country/:code" component={CountryDetails} />
          </Routes>
        </div>
      </Router>
  );
}