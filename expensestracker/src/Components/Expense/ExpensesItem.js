import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpensesItem.css";

const ExpenseItem = (props) => {
  //   console.log(props);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
