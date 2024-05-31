// import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
// import Footer from './Components/Footer';

function App() {
  const [totalCount, setCounter] = useState(0);
  // const[totalValue,setTotalPrice]=useState(0);
  function increaseValue(type){
    if(type==="add"){
      setCounter(totalCount+1);
    }
    else{
      setCounter(totalCount-1);
    }
  }
  // function totalPrice(value,type){
  //   if(type==="add"){
  //     const total=totalValue+value;
  //     setTotalPrice(total);
  //     console.log(value);
  //     console.log(totalValue);
  //   }
  //   else{
  //     console.log(value);
  //     setTotalPrice(totalValue-value);
  //     console.log(totalValue);
  //     console.log(value);
  //   }
  // }

  return (
    <div className="App">
      <Header totalCount={totalCount}/>
      <ProductCard img="https://www.course-api.com/images/cart/phone-1.png" name="Samsung Galaxy S8" price="399.99" increaseValue={increaseValue} />
      <ProductCard img="https://www.course-api.com/images/cart/phone-2.png" name="Google Pixel" price="499.99" increaseValue={increaseValue}/>
      <ProductCard img="https://www.course-api.com/images/cart/phone-3.png" name="Xiaomi Redmi Note 2" price="699.99" increaseValue={increaseValue}/>
      <ProductCard img="https://www.course-api.com/images/cart/phone-4.png" name="Samsung Galaxy S7" price="599.99" increaseValue={increaseValue}/>
      {/* <Footer totalPrice={totalPrice}/>  */}
    </div>
  );
}

export default App;
