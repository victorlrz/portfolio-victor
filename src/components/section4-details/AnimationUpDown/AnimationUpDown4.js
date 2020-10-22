import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDown/AnimationUpDown.module.scss";
import CrossElement10 from "../../figures/crosses/CrossElement10/CrossElement10";
import TriangleElement10 from "../../figures/triangles/TriangleElement10/TriangleElement10";
export default class AnimationUpDown4 extends Component {
  render() {
    return (
        <div className={Style.cssUpDownAnimation}>
            <CrossElement10 />
            <TriangleElement10 />
        </div>
    );
  }
}
