import React from 'react';

function Header(props){

    return(
        <header class="row block center">
            <div>
                <a href='#/'>
                    <h1>Small shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href='#/cart'>Cart</a> <a href='#/singin'>SingIn</a>
            </div>
        </header>
    )

}

export default Header;