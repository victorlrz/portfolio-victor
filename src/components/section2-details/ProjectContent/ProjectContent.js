import React, { Component } from "react";
import Style from "./ProjectContent.module.scss";

export default class ProjectContent extends Component {
  render() {
    return (
        <div className={Style.cssContent + ' ' + Style.cssCtnContent}>
            <div className={Style.cssw100}>
                <div className={Style.cssGridProjects}>
                    <h2 className={Style.cssSectionTitle}>Projects</h2>
                    
                    <a href="https://agence-ledor-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.css1amuae2ProjectCard}>
                    <div className={Style.csscnityrProjectCard}>This project is my entry to Adobe's #ChallengeYourPerspective contest.</div>
                    <div className={Style.cssxr4zslProjectCard}>Agence Ledor</div></a>

                    <a href="https://cafe-florette-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.css1uk8tleProjectCard}>
                    <div className={Style.csscnityrProjectCard}>I entered the DOCMA 2017 award with this Harry Potter inspired image.</div>
                    <div className={Style.cssxr4zslProjectCard}>Café Florette</div></a>
                    
                    <a href="https://medium-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.cssu75v5ProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Recreation of a Tomb Raider Wallpaper (Fan Art)</div>
                    <div className={Style.cssxr4zslProjectCard}>Medium</div></a>
                    
                    <a href="https://cv-example-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.css143qgnProjectCard}>
                    <div className={Style.csscnityrProjectCard}>A fantasy image manipulation relocating the habitat of wild animals.</div>  
                    <div className={Style.cssxr4zslProjectCard}>Exemple de CV</div></a>
                </div>
            </div>    
        </div>
    );
  }
}
