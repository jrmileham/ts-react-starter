import { PropsWithChildren, useState } from "react";
import ExpenseForm from "@App/expense/components/ExpenseForm";
import Expense from "@App/expense/model/Expense";
import "./NewExpense.scss";


export type NewExpenseProps = {
  addExpense: (newExpense: Expense) => void;
};

function NewExpense(props: PropsWithChildren<NewExpenseProps>): JSX.Element {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const startEditingHandler = (): void => setIsEditMode(true);

  const stopEditingHandler = (): void => setIsEditMode(false);
  const saveExpenseHandler = (newExpense: Expense): void => {
    props.addExpense(newExpense);
    setIsEditMode(false);
  };

  return (
  <div className="new-expense">
    {
      isEditMode ? 
        <ExpenseForm 
          submitExpense={saveExpenseHandler}
          cancelExpense={stopEditingHandler}
        />
      :
      <button onClick={startEditingHandler}>Add New Expense</button>
    }
  </div>
  );
}

export default NewExpense;