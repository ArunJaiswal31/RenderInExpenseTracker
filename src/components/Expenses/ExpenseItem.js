import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Location from "./Location";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  //const [newTitle, setNewTitle] = useState("");

  const [title, setTitle] = useState(props.title);
  const[amount,setAmount]=useState(props.amount);
  

  const clickHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.newtitle.value);
  };
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  // const amountHandler = () => {
  //   setAmount("100");
  // };
  const amountHandler=()=>{
    
    setAmount(100);
  };
 

  

 //const locationOfExpenditure = "Example Location";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      
      <div className="expense-item__price">${amount}</div>
      <Location locationOfExpenditure={props.location} />
      <form onSubmit={clickHandler}>
        <input type="text"  name="newtitle" />
        <button type="submit">Change Title</button>
       
      </form>
      <button onClick={amountHandler}>Change Amount</button>
      <button onClick={deleteHandler}>Delete Expense</button>

     
    </Card>
  );
};

export default ExpenseItem;
