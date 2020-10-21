import React, { Component } from "react";
import Style from "../../section1-details/AnimationUpDownWide/AnimationUpDownWide.module.scss";

export default class AnimationUpDownWide2 extends Component {
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
