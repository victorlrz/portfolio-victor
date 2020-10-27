import React, { Component } from "react";
import Style from "./AboutContent.module.scss";

export default class AboutContent extends Component {
  render() {
    return (
        <div className={Style.cssContent + ' ' + Style.cssCtnContent}>
          <div className={Style.aboutSection}>
            <h2 className={Style.titleAbout}>A propos de </h2>
            <blockquote className={Style.blackQuote}>
              <p className={Style.cssBlackP}>A quoi ressemblerait mon stage de rêve ?</p>
            </blockquote>
              <p className={Style.cssLightP}>Mon stage de rêve ... Ce serait rejoindre une équipe de personnes passionnées et dynamiques ! Un stage avec des personnes ouvertes d'esprits, à l'écoute, et prêtes à s'entraider si besoin. Un stage où l'on apprend de nombreuses choses tous les jours sur le plan humain comme sur le plan technique. Enfin, un stage qui me donnera toutes les clés pour m'intégrer et m'épanouir dans le monde professionnel de demain !</p>
          </div>
        </div>
    );
  }
}
