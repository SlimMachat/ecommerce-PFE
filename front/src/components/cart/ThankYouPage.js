import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


export default class ThankYouPage extends React.Component {
 
    
    render() {
        return ( <Thanks>
        <div class="thanks">
            <h1 class="display-3">Thank You!</h1>
            <h2>Your order has been confirmed.</h2>
            <p class="lead"><strong>Enjoy your day</strong> </p>
            
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