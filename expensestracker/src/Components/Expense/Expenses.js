import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const filterChangeYear = (selectedYear) => {
    console.log(selectedYear);
    setfilterYear(selectedYear);
  };

  const filterData = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  //This is the cleanest way to do this

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeYear}
        />
        <ExpensesChart Expenses={filterData} />
        {/*fourth way of writing this */}
        <ExpensesList items={filterData} />
        {/*third way*/}
        {/* {expensesData} */}
        {/*this is second way to doing things --> there is another way it is cleanest way todo*/}
        {/* {filterData.length === 0 && <p>No Expenses Found</p>}
        {filterData.length > 0 &&
          filterData.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))} */}
        {/*first method -->  it looks like to messy we use 2nd method*/}
        {/* {filterData.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filterData.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))
        )} */}

        {/* <ExpensesItem
          title={props.expense[0].title}
          date={props.expense[0].date}
          amount={props.expense[0].amount}
        />
        <ExpensesItem
          title={props.expense[1].title}
          date={props.expense[1].date}
          amount={props.expense[1].amount}
        />
        <ExpensesItem
          title={props.expense[2].title}
          date={props.expense[2].date}
          amount={props.expense[2].amount}
        />
        <ExpensesItem
          title={props.expense[3].title}
          date={props.expense[3].date}
          amount={props.expense[3].amount}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
