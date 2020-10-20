import React, { Component } from "react";
import Style from "./AnimationUpDownWide.module.scss";
import DoubleTriangleElement1 from "../../figures/doubletriangles/DoubleTriangleElement1/DoubleTriangleElement1";
import TriangleElement2 from "../../figures/triangles/TriangleElement2/TriangleElement2";
import CircleElement1 from "../../figures/circles/CircleElement1/CircleElement1";
import TriangleElement3 from "../../figures/triangles/TriangleElement3/TriangleElement3";
import CrossElement1 from "../../figures/crosses/CrossElement1/CrossElement1";
import CircleElement2 from "../../figures/circles/CircleElement2/CircleElement2";
import CrossElement2 from "../../figures/crosses/CrossElement2/CrossElement2";

export default class AnimationUpDownWide extends Component {
  render() {
    return (
        <div className={Style.cssUpDownWideAnimation}>
            <DoubleTriangleElement1/>
            <TriangleElement2 />
            <CircleElement1 />
            <TriangleElement3/>
            <CrossElement1 />
            <CircleElement2 />
            <CrossElement2 />
        </div>
    );
  }
}
