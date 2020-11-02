import React, { Component } from "react";
import Style from "./HexagonElement1.module.scss";

export default class HexagonElement1 extends Component {
  render() {
    return (
        <svg viewBox="0 0 30 30" className={Style.cssHexagon1SVG}><polygon strokeLinejoin="round" strokeMiterlimit="10" points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "></polygon></svg>
    );
  }
}

