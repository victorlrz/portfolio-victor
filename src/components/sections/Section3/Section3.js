import React, { Component } from "react";
import Style from "./Section3.module.scss";
import AnimationUpDown3 from "../../section3-details/AnimationUpDown/AnimationUpDown3";
import AnimationUpDownWide3 from "../../section3-details/AnimationUpDownWide/AnimationUpDownWide3";
import CircleElement13 from "../../figures/circles/CircleElement13/CircleElement13";
import CircleElement14 from "../../figures/circles/CircleElement14/CircleElement14";
import SquareElement9 from "../../figures/squares/SquareElement9/SquareElement9";
import SquareElement10 from "../../figures/squares/SquareElement10/SquareElement10";
import HexagonElement6 from "../../figures/hexagons/HexagonElement6/HexagonElement6";
import AboutContent from "../../section3-details/AboutContent/AboutContent";

export default class Section3 extends Component {
  render() {
    return (
        <div>
            <div className={Style.cssProject + ' ' + Style.ctnPart3SVG}></div>
            <div className={Style.cssZbbnttDivider}>
                <AnimationUpDown3 />
                <AnimationUpDownWide3 />
                <CircleElement13 />
                <CircleElement14 />
                <SquareElement9 />
                <SquareElement10 />
                <HexagonElement6 />
                <AboutContent />
            </div>
        </div>
    );
  }
}

