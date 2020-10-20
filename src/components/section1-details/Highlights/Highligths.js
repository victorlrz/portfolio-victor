import React, { Component } from "react";
import Style from "./Highlights.module.scss";

export default class Highlights extends Component {
  render() {
    return (
        <div className={Style.ctnHighlights + ' ' + Style.pdWindow}>
           <div className={Style.ctnTitle}>
               <h1 className={Style.myTitle}>@Victor Larrezet</h1>
               <p className={Style.myDescription}>Découvrez mon portefeuille de projets webs ! </p>
            </div>
        </div>
    );
  }
}
