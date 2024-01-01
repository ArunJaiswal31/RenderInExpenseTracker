import React,{useState} from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";


import Expenses from "./components/Expenses/Expenses";
let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "school Fee",
    amount: 250,
    date: new Date(2012, 5, 12),
    location: "pune",
  },

  {
    id: "e2",
    title: "Books",
    amount: 230,
    date: new Date(2023, 2, 22),
    location: "pune",
  },

  {
    id: "e3",
    title: "House Rent",
    amount: 3500,
    date: new Date(2022, 1, 12),
    location: "pune",
  }

  
];

const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSE)
  
  const addExpenseHandler=(expense)=>{
    const updatedExpense=[expense,...expenses];
setExpenses(updatedExpense);
  }

  
  const handleDeleteItem = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };
 

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} onDelete={handleDeleteItem}/>
    </div>
  );
};

export default App;
