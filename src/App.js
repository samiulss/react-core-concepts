// import logo from './logo.svg';
import './App.css';

function App() {
  const listProduct = [
    {name:'Apple', price:'200 Taka KG'},
    {name:'Mango', price:'150 Taka KG'},
    {name:'Orange', price:'250 Taka KG'},
    {name:'Banana', price:'20 Taka Hali'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Products listProduct = {listProduct[0]}></Products>
        <Products listProduct = {listProduct[1]}></Products>
        <Products listProduct = {listProduct[2]}></Products>
        <Products listProduct = {listProduct[3]}></Products>
      </header>
    </div>
  );
}
function Products(props) {
  const style = {
    border:'1px solid lime',
    padding:'10px',
    width:'200px',
    height:'200px',
    borderRadius: '8px',
    marginBottom:'10px',
    float:'left',
    marginRight:'9px',
    background:'tomato'
  }
  const {name, price} = props.listProduct;
  return (
    <div style={style}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button id='btn' style={{
        bacKGround:'skyblue',
        borderRadius:'5px',
        padding:'5px'
        }}>Buy now</button>
    </div>
  )
}
export default App;
