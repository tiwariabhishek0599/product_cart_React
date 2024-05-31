import './Footer.css';
import {useState} from 'react';

function Footer(props){
    
    return(
        <div id="main">
            <h2>Total</h2>
            <h2>${props.totalPrice}</h2>
        </div>
    );
}
export default Footer;