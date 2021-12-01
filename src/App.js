import ExpenseItem from "./components/ExpenseItem";
import { EXPENSES as exps } from "./resources/expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {exps.map((exp) => {
        return <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />;
      })}
    </div>
  );
}

export default App;
