import "./Expenses.css";
// import { EXPENSES as exps } from "../../resources/expenses.js";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [date, setDate] = useState("2021");
  const DateFilterChangeHandler = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={date} onDateFilterChange={DateFilterChangeHandler} />
        {props.expenses.map((expense) => {
          return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
