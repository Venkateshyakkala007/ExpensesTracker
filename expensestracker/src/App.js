import logo from "./logo.svg";
import React, { useState } from "react";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css";

const Dummy_Expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // we can handle dynamic list by using state
  const [expenses, setExpenses] = useState(Dummy_Expense);

  // internally react creates JSX like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { expense: expenses })
  // );

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); // in correct way to do it depends on pervious state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); //it is the correct way to do
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
