import pkg from '@package';
import ExpenseItem, { ExpenseItemProps } from '@App/expense/components/ExpenseItem';
/**
 * Main function
 */
function App(): JSX.Element {

  const expenses: ExpenseItemProps[] = [
    {
      expenseDate: new Date(2021, 6, 20),
      expenseTitle: "Tech",
      expenseAmount: 353.52
    },
    {
      expenseDate: new Date(2021, 2, 14),
      expenseTitle: "Vacaciones",
      expenseAmount: 1003
    },
    {
      expenseDate: new Date(2021, 3, 30),
      expenseTitle: "Phone",
      expenseAmount: 30.01
    },
    {
      expenseDate: new Date(2021, 5, 5),
      expenseTitle: "Viajo",
      expenseAmount: 500.25
    }
  ];

  return (
    <div className="App">
      {expenses.map((expense, index): JSX.Element => <ExpenseItem key={index} {...expense} />)}
    </div>
  );
}

export default App;