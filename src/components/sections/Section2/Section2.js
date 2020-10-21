import React, { Component } from "react";
import Style from "./Section2.module.scss";
import ProjectContent from "../../section2-details/ProjectContent/ProjectContent";
import AnimationUpDown2 from "../../section2-details/AnimationUpDown/AnimationUpDown2";
import AnimationUpDownWide2 from "../../section2-details/AnimationUpDownWide/AnimationUpDownWide2";
import CircleElement10 from "../../figures/circles/CircleElement10/CircleElement10";
import CircleElement11 from "../../figures/circles/CircleElement11/CircleElement11";
import SquareElement6 from "../../figures/squares/SquareElement6/SquareElement6";
import SquareElement7 from "../../figures/squares/SquareElement7/SquareElement7";
import HexagonElement4 from "../../figures/hexagons/HexagonElement4/HexagonElement4";
import HexagonElement5 from "../../figures/hexagons/HexagonElement5/HexagonElement5";
export default class Section2 extends Component {
  render() {
    return (
        <div>
            <div className={Style.cssProject + ' ' + Style.ctnPart2SVG}></div>
            <ProjectContent />
            <div className={Style.cssZbbnttDivider}>
              <AnimationUpDown2 />
              <AnimationUpDownWide2 />
              <CircleElement10 />
              <CircleElement11 />
              <SquareElement6 />
              <SquareElement7 />
              <HexagonElement4 />
              <HexagonElement5 />
            </div>
        </div>
    );
  }
}

