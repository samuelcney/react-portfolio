/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import RightPhoto from "./components/RightPhoto";
import ContentOne from "./components/Content1";
import ContentTwo from "./components/Content2";
import Icone from "./components/Icon";
import Lista from "./components/List";

export default ()=>{
    return(
        <div>
        <Header/>
        <Main>

            <ContentOne>
                <Title title="Fullstack Developer"/>
                <Subtitle>
                    <Icone src="src\imgs\react.png"></Icone>
                </Subtitle>
            </ContentOne>

            <ContentTwo>
                <RightPhoto photo="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=samuelcney&layout=compact&bg_color=FFF&border_color=1aff00&title_color=000&text_color=000" class="toplangs"/>
            </ContentTwo>   
        </Main>

        <Main>

        <ContentOne>
            <Title title="Entre em contato:" class="title_2"/>
            <Lista></Lista>
            </ContentOne>

            <ContentTwo>
                <RightPhoto photo="https://static.vecteezy.com/system/resources/previews/007/946/580/original/3d-isometric-illustration-programming-website-dashboard-development-vector.jpg"/>
            </ContentTwo>
        </Main>
        
        <Footer/>
        </div>
    )
}