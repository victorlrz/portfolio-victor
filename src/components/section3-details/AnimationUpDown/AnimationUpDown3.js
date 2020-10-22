import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDown/AnimationUpDown.module.scss";
import SquareElement8 from "../../figures/squares/SquareElement8/SquareElement8"
import CrossElement7 from "../../figures/crosses/CrossElement7/CrossElement"
import TriangleElement8 from "../../figures/triangles/TriangleElement8/TriangleElement8"
import CrossElement8 from "../../figures/crosses/CrossElement8/CrossElement8";

export default class AnimationUpDown3 extends Component {
  render() {
    return (
        <div className={Style.cssUpDownAnimation}>
            <SquareElement8 />
            <CrossElement7 />
            <TriangleElement8 />
            <CrossElement8 />
        </div>
    );
  }
}
