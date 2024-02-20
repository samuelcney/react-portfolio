/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) =>{
    return(
        <>
        <h1 className={props.class}><i><span className="fadeOut">_</span>{props.title}</i></h1>
        </>
    )
}