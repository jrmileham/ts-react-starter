import pkg from '@package';
import ExpenseItem from '@App/expense/components/ExpenseItem';
/**
 * Main function
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <ExpenseItem />
      <p>¡Hola world! Soy {pkg.name}</p>
    </div>
  );
}

export default App;