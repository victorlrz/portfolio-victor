import React, { Component } from "react";
import Style from "../../section4-details/Divider/Divider.module.scss";

export default class Divider extends Component {
  render() {
    return (
        <div className={Style.css13rlu91Divider}>
            <div className={Style.css1j2ji4rContact}>
                <div className={Style.cssplbfp3InnerWaveContact}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none"><path><animate attributeName="d" values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z" repeatCount="indefinite" dur="30s"></animate></path></svg>
                </div>
            </div>
        </div>
    );
  }
}
