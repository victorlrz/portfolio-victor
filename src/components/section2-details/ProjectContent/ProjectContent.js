import React, { Component } from "react";
import Style from "./ProjectContent.module.scss";

export default class ProjectContent extends Component {
  render() {
    return (
        <div className={Style.cssContent + ' ' + Style.cssCtnContent}>
            <div className={Style.cssw100}>
                <div className={Style.cssGridProjects}>
                    <h2 className={Style.cssSectionTitle}>Projets</h2>
                    
                    <a href="https://agence-ledor-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.css1amuae2ProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Projet Web à destination d'une agence immobilière. HTML & CSS</div>
                    <div className={Style.cssxr4zslProjectCard}>Agence Ledor</div></a>

                    <a href="https://cafe-florette-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.css1uk8tleProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Projet Web à destination d'un café. HTML & CSS</div>
                    <div className={Style.cssxr4zslProjectCard}>Café Florette</div></a>
                    
                    <a href="https://medium-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.cssu75v5ProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Projet Web, clone du site Medium. HTML & CSS</div>
                    <div className={Style.cssxr4zslProjectCard}>Medium</div></a>
                    
                    <a href="https://cv-example-victor.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.css143qgnProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Projet Web d'un exemple de CV. HTML, CSS & SCSS</div>  
                    <div className={Style.cssxr4zslProjectCard}>Exemple de CV</div></a>

                    <a href="https://victor-blog.netlify.app/" target="_blank" rel="noreferrer noopener" className={Style.cssu76v5ProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Projet Web d'un petit blog. HTML, SCSS & JS</div>
                    <div className={Style.cssxr4zslProjectCard}>Blog</div></a>
                    
                    <a href="https://youtu.be/D_7Ps0bMVTU" target="_blank" rel="noreferrer noopener" className={Style.css77qgnProjectCard}>
                    <div className={Style.csscnityrProjectCard}>Projet Web d'un site de recherche de films. React & SCSS</div>  
                    <div className={Style.cssxr4zslProjectCard}>Films</div></a>
                </div>
            </div>    
        </div>
    );
  }
}
