import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDownWide/AnimationUpDownWide.module.scss";
import DoubleTriangleElement3 from "../../figures/doubletriangles/DoubleTriangleElement3/DoubleTriangleElement3";
import TriangleElement9 from "../../figures/triangles/TriangleElement9/TriangleElement9";
import CircleElement12 from "../../figures/circles/CircleElement12/CircleElement12";

export default class AnimationUpDownWide3 extends Component {
  render() {
    return (
        <div className={Style.cssUpDownWideAnimation}>
          <DoubleTriangleElement3 />
          <TriangleElement9 />
          <CircleElement12 />
        </div>
    );
  }
}
