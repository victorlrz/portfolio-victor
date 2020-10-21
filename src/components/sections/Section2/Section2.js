import React, { Component } from "react";
import Style from "./Section2.module.scss";


export default class Section2 extends Component {
  render() {
    return (
        <div>
            <div className={Style.ctnPart2}>
                <div className={Style.cssProject + ' ' + Style.ctnPart2SVG}></div>
            </div>
        </div>
    );
  }
}

