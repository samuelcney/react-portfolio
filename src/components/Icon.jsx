/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ReactIcon from "./imgs/react.png";
import JavascriptIcon from "./imgs/javascript.png";
import HtmlIcon from "./imgs/html.png";
import AngularIcon from "./imgs/angular.png"

export default (props) =>{
    return(
        <>
        <span><img src={ReactIcon} className="icon"/></span>
        <span><img src={JavascriptIcon} className="icon"/></span>
        <span><img src={HtmlIcon} className="icon"/></span>
        <span><img src={AngularIcon} className="icon"/></span>
        </>
    )
}