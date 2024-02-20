/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) =>{
    return(
        <>
            <img src={props.photo} className={props.class}/>
        </>
    )
}