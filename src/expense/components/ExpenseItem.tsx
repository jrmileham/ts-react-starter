import ShowDate from '@App/components/ShowDate';
import { PropsWithChildren } from 'react';
import './ExpenseItem.scss';
import './ExpenseDate.scss';
import Card from '@App/components/Card';


export type ExpenseItemProps = {
  expenseDate: Date,
  expenseTitle: string,
  expenseAmount: number
}

function ExpenseItem(props: PropsWithChildren<ExpenseItemProps>): JSX.Element {

  const { expenseDate, expenseAmount, expenseTitle } = props;

  return (
    <Card className="expense-item">
      <ShowDate className="expense-date" date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£{expenseAmount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;