import { PropsWithChildren, useState } from 'react';
import Card from '@App/components/Card';
import ExpenseItem  from '@App/expense/components/ExpenseItem';
import ExpensesFilter from '@App/expense/components/ExpensesFilter';
import Expense from '@App/expense/model/Expense';
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
      {
        (filteredExpenses.length > 0) ?
          filteredExpenses.map((expense: Expense, index: number): JSX.Element => 
            <ExpenseItem 
              key={index} 
              expenseAmount={expense.amount} 
              expenseTitle={expense.title} 
              expenseDate={expense.date} 
            />
          )
        : null
      }
    </Card>
  );
}

export default Expenses;