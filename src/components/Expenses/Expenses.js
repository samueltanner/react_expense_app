import "./Expenses.css";
// import { EXPENSES as exps } from "../../resources/expenses.js";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [date, setDate] = useState("");
  const onDateFilterChangeHandler = (date) => {
    setDate("date");
  };

  return (
    <div>
      <ExpensesFilter onDateFilterChange={onDateFilterChangeHandler} />
      <Card className="expenses">
        {props.expenses.map((expense) => {
          return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
