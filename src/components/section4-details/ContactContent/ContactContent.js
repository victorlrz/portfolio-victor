import React, { Component } from "react";
import Style from "../../section4-details/ContactContent/ContactContent.module.scss";

export default class ContactContent extends Component {
  render() {
    return (
        <div className={Style.cssContactContent}>
            <div className={Style.cssContentCtn}>
                <h2 className={Style.cssContentTitle}>Get in touch</h2>
                <p className={Style.cssP}>Say <a href="plizNoSp4m@domain.tld" className={Style.linkContact}>Hi</a> or find me on other platforms: <a href="https://dribbble.com/LekoArts" className={Style.linkContact}>Dribbble</a> &amp; <a href="https://www.instagram.com/lekoarts.de/" className={Style.linkContact}>Instagram</a></p>
            </div>
        </div>
    );
  }
}
