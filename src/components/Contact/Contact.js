import React from "react";

import ImgInstagram from "./imeges/instagram.svg";
import ImgGithub from "./imeges/github.svg";
import ImgLinkedin from "./imeges/linkedin.svg";
import ImgTelegram from "./imeges/telegram.svg";
import ImgGmail from "./imeges/gmail.svg";
import "./Contact.scss";

const Contact = () => {
    const text = `You can tell me "Hi!" \nand subscribe on another platforms:`;

    return (
        <div className="contact">
            <p className="contact-text">{text}</p>

            <div className="link">
                <div className="link__wrapper">
                    <a href="https://github.com/TataRozhdez" target="_blank" rel="noopener noreferrer">
                        <img alt="github" src={ImgGithub} />
                    </a>
                </div>

                <div className="link__wrapper">
                    <a href="https://www.linkedin.com/in/tetianazhukova/" target="_blank" rel="noopener noreferrer">
                        <img alt="linkedin" src={ImgLinkedin} />
                    </a>
                </div>

                <div className="link__wrapper">
                    <a href="https://www.instagram.com/glorious_amanta/" target="_blank" rel="noopener noreferrer">
                        <img alt="instagram" src={ImgInstagram} />
                    </a>
                </div>

                <div className="link__wrapper">
                    <a href="https://t.me/glorious_amanta" target="_blank" rel="noopener noreferrer">
                        <img alt="telegram" src={ImgTelegram} />
                    </a>
                </div>

                <div className="link__wrapper">
                    <a href="mailto:tanya.zhukova.95@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img alt="gmail" src={ImgGmail} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
