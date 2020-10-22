import React, { Component } from "react";
import Style from "../../sections/Section4/Section4.module.scss"
import AnimationUpDown4 from "../../section4-details/AnimationUpDown/AnimationUpDown4";
import ContactContent from "../../section4-details/ContactContent/ContactContent";
import Divider from "../../section4-details/Divider/Divider"
import AnimationUpDownWide4 from "../../section4-details/AnimationUpDowWide/AnimationUpWide4";
import CircleElement16 from "../../figures/circles/CircleElement16/CircleElement16";
export default class Section4 extends Component {
  render() {
    return (
        <div>
            <Divider />
            <ContactContent />
            <div className={Style.cssZbbnttDivider}>
            <AnimationUpDown4 />
            <AnimationUpDownWide4 />
            <CircleElement16 />
            </div>
        </div>
    );
  }
}

