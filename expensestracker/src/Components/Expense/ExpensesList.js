import React from "react";

import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">Found no expenses</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
