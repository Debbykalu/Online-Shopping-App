// App.js
import React from 'react';
import './App.css';
import BreakDown from './Components/BreakDown';
import { CategoryProvider } from './Components/CategoryContext';

const App = () => {
  return (
    <CategoryProvider>
      <div className="App">
        <BreakDown />
      </div>
    </CategoryProvider>
  );
};

export default App;
