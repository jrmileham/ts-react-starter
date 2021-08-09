import { PropsWithChildren } from 'react';
import ExpenseItem from '@App/expense/components/ExpenseItem';
import Expense from '@App/expense/model/Expense';
import './ExpensesList.scss';

export type ExpensesListProps = {
  expenses: Expense[];
};

function ExpensesList(props: PropsWithChildren<ExpensesListProps>): JSX.Element {
  
  if(props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>
  }

  return (
    <ul className="expenses-list">
      {
        props.expenses.map((expense: Expense, index: number): JSX.Element => 
          <ExpenseItem 
            key={index} 
            expenseAmount={expense.amount} 
            expenseTitle={expense.title} 
            expenseDate={expense.date} 
          />
        )
      }
    </ul>
  );
}

export default ExpensesList;