import { PropsWithChildren, useState } from 'react';
import Card from '@App/components/Card';
import ExpensesFilter from '@App/expense/components/ExpensesFilter';
import ExpensesList from '@App/expense/components/ExpensesList';
import Expense from '@App/expense/model/Expense';
import ExpensesChart from './ExpensesChart';
import './Expenses.scss';

export type ExpensesProps = {
  expenses: Expense[];
};

function Expenses(props: PropsWithChildren<ExpensesProps>): JSX.Element {
  const [filteredYear, setFilteredYear] = useState<number>(2021);

  const filterChangeHandler = (selectedYear: number): void =>  setFilteredYear(selectedYear);

  const filteredExpenses: Expense[] = props.expenses.filter((expense: Expense) => expense.date.getFullYear() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;