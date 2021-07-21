import pkg from '@package';
import ExpenseItem, { ExpenseItemProps } from '@App/expense/components/ExpenseItem';
/**
 * Main function
 */
function App(): JSX.Element {
  const expenseDate = new Date(2021, 6, 20);
  const expenseTitle = "Tech";
  const expenseAmount = 353.52;

  const expenses: (ExpenseItemProps & {key: number})[] = [
    {
      key: 2,
      expenseDate: new Date(2021, 2, 14),
      expenseTitle: "Vacaciones",
      expenseAmount: 1003
    },
    {
      key: 3,
      expenseDate: new Date(2021, 5, 5),
      expenseTitle: "Viajo",
      expenseAmount: 500.25
    }
  ];

  return (
    <div className="App">
      <ExpenseItem {...{key: 0, expenseDate, expenseAmount, expenseTitle}}/>
      <ExpenseItem
        key={1}
        expenseAmount={30} 
        expenseDate={new Date(2021, 3, 30)} 
        expenseTitle="Phone"
      />
      {expenses.map(expense => <ExpenseItem {...expense} />)}
    </div>
  );
}

export default App;