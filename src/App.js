import React from 'react';
import Homepage from './components/Homepage';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import DetailedPage from './components/DetailedPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' component={Homepage} exact />
        {/*<Route path='/:id' component={DetailedPage} />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
