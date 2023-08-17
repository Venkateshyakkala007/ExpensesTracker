import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const showFormHandler = () => {
    setIsEditing(!isEditing);
  };

  const hideFromHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpensesData={saveExpenseDataHandler}
          onCancel={hideFromHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
