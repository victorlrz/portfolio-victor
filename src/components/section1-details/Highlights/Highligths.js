import React, { Component } from "react";
import Style from "./Highlights.module.scss";

export default class Highlights extends Component {
  render() {
    return (
        <div className={Style.ctnHighlights + ' ' + Style.pdWindow}>
           <div className={Style.ctnTitle}>
              {/* <div className={Style.imgCtn}>
                <img className={Style.profileStyle} src="/img/profile.png" alt="profile"></img>
              </div> */}
              <div>
                <h1 className={Style.myTitle}>Victor Larrezet</h1>
                <p className={Style.myDescription}>Découvrez mon portefeuille de projets web ! </p>
              </div>
            </div>
        </div>
    );
  }
}


