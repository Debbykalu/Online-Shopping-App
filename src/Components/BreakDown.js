import React from 'react';
import { useCategoryContext } from './CategoryContext';

const BreakDown = () => {
  const { state, dispatch } = useCategoryContext();

  const getTotalSpendForCategory = (category) => {
    const categoryTransactions = state.transactions.filter((transaction) => transaction.category === category);
    return categoryTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const handleCategoryClick = (category) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: category });
  };

  const getTransactionsForCategory = (category) => {
    if (!category) return [];
    return state.transactions.filter((transaction) => transaction.category === category);
  };

  const renderTransactions = () => {
    const categoryTransactions = getTransactionsForCategory(state.selectedCategory);
    if (categoryTransactions.length === 0) {
      return <p>No transactions for {state.selectedCategory}.</p>;
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleTimeString('en-US', options);
      };

    return (
      <ul>
        {categoryTransactions.map((transaction, index) => (
          <li key={index}>
            <p>{formatTime(transaction.date)}  {transaction.name}</p>
            <p>£{transaction.amount}</p>
          </li>
        ))}
      </ul>
    );
  };
  

  return (
    <div className="SpendingBreakdownScreen">
      <h1>Spending Breakdown</h1>
      <ul>
        {state.categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            <p>{category}</p>
            <p> £{getTotalSpendForCategory(category)}</p>
          </li>
        ))}
      </ul>
      {state.selectedCategory && (
        <div className="transactions">
          <h2>{state.selectedCategory} Transactions</h2>
          {renderTransactions()}
        </div>
      )}
    </div>
  );
};

export default BreakDown;
