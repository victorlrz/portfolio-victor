import React, { Component } from "react";
import Style from "../../section4-details/ContactContent/ContactContent.module.scss";

export default class ContactContent extends Component {
  render() {
    return (
        <div className={Style.cssContactContent}>
            <div className={Style.cssContentCtn}>
                <h2 className={Style.cssContentTitle}>Contacts</h2>
                <p className={Style.cssP}>Vous pouvez me contacter sur la plateforme <a href="https://www.linkedin.com/in/victor-larrezet/" target="_blank" rel="noreferrer noopener" className={Style.linkContact}>LinkedIn</a> ou par les moyens suivants : </p>
                <p className={Style.cssP}><i className="fas fa-phone-alt"></i>+33.6.06.92.15.22</p>
                <p className={Style.cssP}><i className="fas fa-envelope"></i>larrezetvictor@gmail.com</p>
                <p className={Style.cssP}><i className="fab fa-github"></i><a href="https://github.com/vlarreze" target="_blank" rel="noreferrer noopener" className={Style.linkContact}>Github</a></p>

            </div>
        </div>
    );
  }
}
