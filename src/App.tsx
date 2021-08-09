import { useState } from 'react';
import pkg from '@package';
import Expenses from '@App/expense/components/Expenses';
import NewExpense from '@App/expense/components/NewExpense';
import Expense from '@App/expense/model/Expense';

/**
 * Main function
 */
function App(): JSX.Element {
  const [expenses, setExpenses] = useState<Expense[]>(
    [
      {
        date: new Date(2021, 6, 20),
        title: "Tech",
        amount: 353.52
      },
      {
        date: new Date(2021, 2, 14),
        title: "Vacaciones",
        amount: 1003
      },
      {
        date: new Date(2021, 3, 30),
        title: "Phone",
        amount: 30.01
      },
      {
        date: new Date(2021, 5, 5),
        title: "Viajo",
        amount: 500.25
      }
    ]
  );

  const addExpense = (newExpense: Expense): void => {
    setExpenses((prevState: Expense[]): Expense[] => 
      [...prevState, newExpense]);
  };
  return (
    <div className="App">
      <NewExpense addExpense={addExpense}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;