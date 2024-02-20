/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Github from "./imgs/github.png"
import Linkedin from "./imgs/linkedin.png"
import Instagram from "./imgs/instagram.png"
export default ()=>{
    
    return(
        <>
        <ul class="subtitle_2">
                <li>
                    <img src={Github}/><a href="https://github.com/samuelcney" target="_blank">GitHub</a> 
                </li>
                <li>
                    <img src={Linkedin}/><a href="https://www.linkedin.com/in/samuel-costa-b94331291/" target="_blank">Linkedin</a> 
                </li>
                <li>
                    <img src={Instagram}/><a href="https://www.instagram.com/samu_cney/" target="_blank">Instagram</a> 
                </li>
            </ul>
        </>
    )
}