import { PropsWithChildren } from 'react';
import './ExpenseItem.scss';


export type ExpenseItemProps = {
  expenseDate: Date,
  expenseTitle: string,
  expenseAmount: number
}

function ExpenseItem(props: PropsWithChildren<ExpenseItemProps>): JSX.Element {
  const { expenseDate, expenseTitle, expenseAmount } = props;
  const formattedDate: string = expenseDate.toLocaleString("en-GB", {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  return (
    <div className="expense-item">
      <div>{formattedDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;