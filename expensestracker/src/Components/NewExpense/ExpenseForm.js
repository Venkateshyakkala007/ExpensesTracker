import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmont, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const changeTextHanlder = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // remember this whenever you want to change the state based on pervious object then you need to use below approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(event.target.value);
  };

  const changeAmountHanlder = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // console.log(typeof event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // console.log(typeof event.target.value);
  };

  // instead of writing above three functions
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "text") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseObject = {
      title: enteredTitle,
      amount: +enteredAmont,
      date: new Date(enteredDate),
    };

    // console.log(expenseObject);
    props.onSaveExpensesData(expenseObject);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => inputChangeHandler("text", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmont}
            onChange={(event) =>
              inputChangeHandler("number", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">AddExpenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
