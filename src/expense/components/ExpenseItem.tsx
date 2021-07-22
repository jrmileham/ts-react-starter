import ShowDate from '@App/components/ShowDate';
import { PropsWithChildren } from 'react';
import './ExpenseItem.scss';


export type ExpenseItemProps = {
  expenseDate: Date,
  expenseTitle: string,
  expenseAmount: number
}

function ExpenseItem(props: PropsWithChildren<ExpenseItemProps>): JSX.Element {
  const { expenseDate, expenseTitle, expenseAmount } = props;
  return (
    <div className="expense-item">
      <ShowDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;