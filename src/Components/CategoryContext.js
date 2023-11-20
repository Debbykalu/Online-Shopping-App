import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CategoryContext = createContext();

const initialState = {
  transactions: [],
  categories: [],
  selectedCategory: null,
};

const CategoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        transactions: action.payload.transactions || [],
        categories: action.payload.transactions ? getUniqueCategories(action.payload.transactions) : [],
      };
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: state.selectedCategory === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

const getUniqueCategories = (transactions) => {
  if (!transactions) return [];
  const uniqueCategories = [...new Set(transactions.map((transaction) => transaction.category))];
  return uniqueCategories;
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://csb-u0slz.vercel.app/api/transactions');
        const data = await response.json();
        dispatch({ type: 'SET_DATA', payload: { transactions: data } });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};


export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('This should be within an CategoryProvider');
  }
  return context;
};
