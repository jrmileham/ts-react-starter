import './Expenses.scss';
import ExpenseItem  from '@App/expense/components/ExpenseItem';
import Card from '@App/components/Card';
import { PropsWithChildren } from 'react';
import Expense from '@App/expense/model/Expense';

export type ExpensesProps = {
  expenses: Expense[];
};

function Expenses(props: PropsWithChildren<ExpensesProps>): JSX.Element {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;