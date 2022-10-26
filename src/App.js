// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  return (
    <div style={{
      border: '1px solid yellow',
      margin: '10px',
      padding: '10px',
      borderRadius: '10px'
      }}>
      <h1>Name: Md Samiul</h1>
      <h2>I'm learning React</h2>
    </div>
  )
}

export default App;
