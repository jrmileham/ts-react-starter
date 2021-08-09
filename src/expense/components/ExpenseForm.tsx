import { ChangeEvent, FormEvent, PropsWithChildren, useState } from "react";
import moment from "moment";
import Expense from "@App/expense/model/Expense";
import "./NewExpense.scss";

export type ExpenseFormProps = {
  submitExpense: (newExpense: Expense) => void;
};

const defaultState: Expense = {
  title: "",
  amount: 0.00,
  date: new Date()
};

function ExpenseForm(props: PropsWithChildren<ExpenseFormProps>): JSX.Element {

  const [expense, setExpense] = useState<Expense>(defaultState);

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setExpense((prevState: Expense): Expense => ({...prevState, title: event.target.value}));
  }
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setExpense((prevState: Expense): Expense => ({...prevState, amount: event.target.valueAsNumber}));
  }
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setExpense((prevState: Expense): Expense => ({...prevState, date: event.target.valueAsDate!}));
  }
  const submitFormHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.submitExpense(expense);
    setExpense(defaultState);
  }

  return (
    <form onSubmit={submitFormHandler}> 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expense.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={expense.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={moment(expense.date).format("yyyy-MM-DD")} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;