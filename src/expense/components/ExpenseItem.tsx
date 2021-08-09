import { PropsWithChildren } from 'react';
import ShowDate from '@App/components/ShowDate';
import Card from '@App/components/Card';
import './ExpenseItem.scss';
import './ExpenseDate.scss';

export type ExpenseItemProps = {
  expenseDate: Date,
  expenseTitle: string,
  expenseAmount: number
}

function ExpenseItem(props: PropsWithChildren<ExpenseItemProps>): JSX.Element {

  const { expenseDate, expenseAmount, expenseTitle } = props;

  return (
    <li>
      <Card className="expense-item">
        <ShowDate className="expense-date" date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">£{expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;