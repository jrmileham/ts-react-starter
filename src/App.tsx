import pkg from '@package';

/**
 * Main function
 */
function App(): JSX.Element {
  return (
    <div className="App"> 
      <p>¡Hola world! Soy {pkg.name}</p>
    </div>
  );
}

export default App;