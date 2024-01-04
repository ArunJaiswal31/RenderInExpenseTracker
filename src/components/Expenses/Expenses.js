import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";


 


// const Expenses = (props) => {
//   const handleDelete = (id) => {
//     props.onDelete(id);
// };


const Expenses=(props)=>{
  const[filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear)
  
}


  const ExpenseItems = props.item.map((expense) => (
    
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
      location={expense.location}
      key={expense.id}
     // onDelete={handleDelete}
    />
  ));
 
  
  return (
  <Card className="expenses">
   <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
  {ExpenseItems}
  </Card>
  );
  };




export default Expenses;


