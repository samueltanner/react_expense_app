import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [date, setDate] = useState("2021");
  const DateFilterChangeHandler = (date) => {
    setDate(date);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === date;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={date} onDateFilterChange={DateFilterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
