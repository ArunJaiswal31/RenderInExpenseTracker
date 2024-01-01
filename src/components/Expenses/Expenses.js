import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";


 


const Expenses = (props) => {
  const handleDelete = (id) => {
    props.onDelete(id);
  };
  const ExpenseItems = props.item.map((expense) => (
    
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
      location={expense.location}
      key={expense.id}
      onDelete={handleDelete}
    />
  ));
 
  
  return <Card className="expenses">{ExpenseItems} </Card>;
};


export default Expenses;
