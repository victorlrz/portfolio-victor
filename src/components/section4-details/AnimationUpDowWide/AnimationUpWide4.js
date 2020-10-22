import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDownWide/AnimationUpDownWide.module.scss";
import TriangleElement11 from "../../figures/triangles/TriangleElement11/TriangleElement11";
import CircleElement15 from "../../figures/circles/CircleElement15/CircleElement15";
import CrossElement11 from "../../figures/crosses/CrossElement11/CrossElement11";

export default class AnimationUpDownWide4 extends Component {
  render() {
    return (
        <div className={Style.cssUpDownWideAnimation}>
            <TriangleElement11 />
            <CircleElement15 />
            <CrossElement11 />
        </div>
    );
  }
}
