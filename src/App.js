// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name:'Apple', price:'200$'},
    {name:'Mango', price:'150$'},
    {name:'Banana', price:'50$'},
    {name:'Orange', price:'250$'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Count(props){
  const [count, setcount] = useState(0);
  return(
    <div>
      <h2>Like: {count}</h2>
      <button onClick={() => setcount(count + 1)}>Like</button>
      <button onClick={() => setcount(count - 1)}>Dislike</button>
    </div>
  )
}

function Users(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return(
    <div>
      <h3>Dynamic users: {user.length}</h3>
      <ul>
        {
          user.map(users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const {name, price} = props.product;
  const handler = () => console.log('clicked');
  return(
    <div className='component'>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button onClick={handler}>Buy now</button>
    </div>
  )
}
export default App;
