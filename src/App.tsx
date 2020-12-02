import pkg from '@package';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ¡Hola world! Soy {pkg.name}
        </p>
      </header>
    </div>
  );
}

export default App;
