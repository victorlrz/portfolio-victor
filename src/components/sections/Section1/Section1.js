import React, { Component } from "react";
import Style from "./Section1.module.scss";
import AnimationUpDown from "../../section1-details/AnimationUpDown/AnimationUpDown"
import AnimationUpDownWide from "../../section1-details/AnimationUpDownWide/AnimationUpDownWide"
import Highlights from "../../section1-details/Highlights/Highligths"
import CircleElement3 from "../../figures/circles/CircleElement3/CircleElement3"
import CircleElement4 from "../../figures/circles/CircleElement4/CircleElement4"
import CircleElement5 from "../../figures/circles/CircleElement5/CircleElement5"
import CrossElement3 from "../../figures/crosses/CrossElement3/CrossElement3"
import CrossElement4 from "../../figures/crosses/CrossElement4/CrossElement4"
import TriangleElement4 from "../../figures/triangles/TriangleElement4/TriangleElement4"
import CircleElement6 from "../../figures/circles/CircleElement6/CircleElement6"
import SquareElement2 from "../../figures/squares/SquareElement2/SquareElement2"
import SquareElement3 from "../../figures/squares/SquareElement3/SquareElement3"
import SquareElement4 from "../../figures/squares/SquareElement4/SquareElement4"
import HexagonElement2 from "../../figures/hexagons/HexagonElement2/HexagonElement2"
import HexagonElement3 from "../../figures/hexagons/HexagonElement3/HexagonElement3"

export default class Section1 extends Component {
  render() {
    return (
        <div className={Style.ctnPart1}>
            <div>
                <div className={Style.cssZbbnttDivider + ' ' + Style.ctnPart1SVG}>
                    <AnimationUpDown/>
                    <AnimationUpDownWide />
                    <CircleElement3 />
                    <CircleElement4 />
                    <CircleElement5 />
                    <CrossElement3 />
                    <CrossElement4 />
                    <TriangleElement4 />
                    <CircleElement6 />
                    <SquareElement2 />
                    <SquareElement3 />
                    <SquareElement4 />
                    <HexagonElement2 />
                    <HexagonElement3 />
                    <Highlights />
                </div>
            </div>
        </div>
    );
  }
}
