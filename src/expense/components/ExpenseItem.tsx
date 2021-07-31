import ShowDate from '@App/components/ShowDate';
import { PropsWithChildren, useState } from 'react';
import './ExpenseItem.scss';
import './ExpenseDate.scss';
import Card from '@App/components/Card';


export type ExpenseItemProps = {
  expenseDate: Date,
  expenseTitle: string,
  expenseAmount: number
}

function ExpenseItem(props: PropsWithChildren<ExpenseItemProps>): JSX.Element {
  const [ title, updateTitle ] = useState<string>(props.expenseTitle);
  
  function changeTitle () { updateTitle("hello " + props.expenseTitle) };

  const { expenseDate, expenseAmount } = props;
  return (
    <Card className="expense-item">
      <ShowDate className="expense-date" date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{expenseAmount}</div>
        <button onClick={changeTitle}>change title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;