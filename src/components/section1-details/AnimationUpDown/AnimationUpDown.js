import React, { Component } from "react";
import Style from "./AnimationUpDown.module.scss";
import TriangleElement1 from "../../figures/triangles/TriangleElement1/TriangleElement1";
import SquareElement1 from "../../figures/squares/SquareElement1/SquareElement1";
import HexagonElement1 from "../../figures/hexagons/HexagonElement1/HexagonElement1"

export default class AnimationComponentUpDown extends Component {
  render() {
    return (
        <div className={Style.cssUpDownAnimation}>
            <TriangleElement1/>
            <SquareElement1/>
            <HexagonElement1/>
        </div>
    );
  }
}
