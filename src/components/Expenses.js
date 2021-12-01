import "./Expenses.css";
import { EXPENSES as exps } from "../resources/expenses.js";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  return (
    <div className="expenses">
      {exps.map((exp) => {
        return <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />;
      })}
    </div>
  );
}

export default Expenses;
