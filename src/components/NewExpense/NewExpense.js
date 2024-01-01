import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
const newExpenseId={
    ...enteredExpenseData,
    id:Math.random().toString()
}
props.onAddExpense(newExpenseId);
console.log(newExpenseId);
        
    }
   
    
return(
<div className="new-expense">
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

</div>

);


};

export  default NewExpense;
