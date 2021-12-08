import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [showExpenseForm, toggleShowExpenseForm] = useState(false);

  const toggleExpenseFormHandler = () => {
    toggleShowExpenseForm(!showExpenseForm);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && <button onClick={toggleExpenseFormHandler}>Add Expense</button>}
      {showExpenseForm && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={toggleExpenseFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;
