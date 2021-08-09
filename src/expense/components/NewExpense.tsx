import { PropsWithChildren } from "react";
import ExpenseForm from "@App/expense/components/ExpenseForm";
import Expense from "@App/expense/model/Expense";
import "./NewExpense.scss";


export type NewExpenseProps = {
  addExpense: (newExpense: Expense) => void;
};

function NewExpense(props: PropsWithChildren<NewExpenseProps>): JSX.Element {
  return (
  <div className="new-expense">
    <ExpenseForm submitExpense={props.addExpense}/>
  </div>
  );
}

export default NewExpense;