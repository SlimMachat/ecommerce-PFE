import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


export default class ThankYouPage extends React.Component {
 
    
    render() {
        return ( <Thanks>
        <div class="thanks">
            <h1 class="display-3">Thank You!</h1>
            <h2>Your order has been confirmed.</h2>
            <p class="lead"><strong>Please check your email</strong> for further instructions on when you will receive the delivery.</p>
            <p class="lead">
                The payment will be done when delivery received.
            </p>
            <Link class="home" to="/"> Home Page </Link>
        </div></Thanks>
        )
    }
} 

const Thanks=styled.div`
.thanks{
    text-align:center;
}
.home{
    color:#6495ED;
    font-style:italic;
}



`