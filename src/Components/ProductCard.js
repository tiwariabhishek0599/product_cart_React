import {useState} from 'react';


function ProductCard(props){

const[counter,setCounter]=useState(0);
function increaseCounter(){
    setCounter(counter+1);
    props.increaseValue("add");
    // props.totalPrice(props.price,"add");
}
function decreaseCounter(){
    if(counter>0){
        setCounter(counter-1);
        props.increaseValue("sub");
        // props.totalPrice(props.price,"sub");
    }
}

    return(
       <div
       style={{
        margin:"0 20rem",
        gap:"5rem",
        border:"1px solid black",
        display:"flex",
        justifyContent:"space-around",
        border:"none",
        boxShadow:"0 0 0 2px rgba(0,0,0,.2)",
       }}
       >
        <img src={props.img} 
        style={{height:"100px",width:"100px"}}/>
       <div style={{
        width:"250px"
       }}>
        <h3>{props.name}</h3>
        <p style={{
            color:"red"
        }}>${props.price}</p>
        <span
        style={{
            fontSize:"14px",
            color:"blue",
        }}>Remove</span>

       </div>
       <div style={{
        height:"80px",
        width:"80px",
        padding:"20px",
       }}>
        <button onClick={decreaseCounter}
        style={{height:"20px",width:"20px",border:"none",backgroundColor:"#A29CF8",color:"wheat"}}
        >-</button>
        <p>{counter}</p>
        <button onClick={increaseCounter}
        style={{height:"20px",width:"20px", border:"none",backgroundColor:"#A29CF8",color:"wheat"}}
        >+</button>
        </div>
        
       </div>
    );
}
export default ProductCard;