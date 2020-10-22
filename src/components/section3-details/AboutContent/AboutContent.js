import React, { Component } from "react";
import Style from "./AboutContent.module.scss";

export default class AboutContent extends Component {
  render() {
    return (
        <div className={Style.cssContent + ' ' + Style.cssCtnContent}>
          <div className={Style.aboutSection}>
            <h2 className={Style.titleAbout}>About</h2>
            <blockquote className={Style.blackQuote}>
              <p className={Style.cssBlackP}>The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji into my speech to better express myself. Winky face.</p>
            </blockquote>
              <p className={Style.cssLightP}>You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?</p>
          </div>
        </div>
    );
  }
}
