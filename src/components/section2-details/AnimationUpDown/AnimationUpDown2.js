import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDown/AnimationUpDown.module.scss";
import SquareElement5 from "../../figures/squares/SquareElement5/SquareElement5"
import CrossElement5 from "../../figures/crosses/CrossElement5/CrossElement5"
import TriangleElement5 from "../../figures/triangles/TriangleElement5/TriangleElement5"
import CircleElement7 from "../../figures/circles/CircleElement7/CircleElement7"

export default class AnimationUpDown2 extends Component {
  render() {
    return (
        <div className={Style.cssUpDownAnimation}>
            <SquareElement5 />
            <CrossElement5 />
            <TriangleElement5 />
            <CircleElement7 />
        </div>
    );
  }
}
