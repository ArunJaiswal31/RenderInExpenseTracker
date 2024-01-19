import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
function Expenses(props) {
  const uniqueYears = Array.from(new Set(props.item.map((expense) => expense.date.getFullYear())));
  const [selectedYear, setSelectedYear] = useState(null);

  const yearChangeHandler = (event) => {
    const selectedYear = parseInt(event.target.value, 10);
    setSelectedYear(selectedYear);
    props.onFilter(selectedYear);
  };

  const filteredExpenses = selectedYear
    ? props.item.filter((expense) => expense.date.getFullYear() === selectedYear)
    : props.item;

  return (
    <Card>
      <div>
        <label>Select Year:</label>
        <select value={selectedYear || ''} onChange={yearChangeHandler}>
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
