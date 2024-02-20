/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) =>{
    return(
    <>
        <h2>Meu nome é <i>Samuel Costa</i>,<br/> sou programador React <span className="cor">|</span> Javascript <span class="cor">|</span> Angular<br/>
        {props.children}
        </h2>
    </>
    )
}