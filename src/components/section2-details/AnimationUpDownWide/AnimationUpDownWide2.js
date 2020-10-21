import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDownWide/AnimationUpDownWide.module.scss";
import DoubleTriangleElement2 from "../../figures/doubletriangles/DoubleTriangleElement2/DoubleTriangleElement2";
import TriangleElement6 from "../../figures/triangles/TriangleElement6/TriangleElement6";
import CircleElement8 from "../../figures/circles/CircleElement8/CircleElement8";
import TriangleElement7 from "../../figures/triangles/TriangleElement7/TriangleElement7";
import CircleElement9 from "../../figures/circles/CircleElement9/CircleElement9";
import CrossElement6 from "../../figures/crosses/CrossElement6/CrossElement6";

export default class AnimationUpDownWide2 extends Component {
  render() {
    return (
        <div className={Style.cssUpDownWideAnimation}>
          <DoubleTriangleElement2 />
          <TriangleElement6 />
          <CircleElement8 />
          <TriangleElement7 />
          <CircleElement9 />
          <CrossElement6 />
        </div>
    );
  }
}
