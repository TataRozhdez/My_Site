import React from "react";

import "./WorkSlide.scss";

const WorkSlide = (props) => {
    const { link, title, desc, tech } = props;

    return (
        <a href={link} target="_blank" rel="noreferrer" className="work__slide">
            <p className="title__wrapper">
                <span className="work-slide__title">{title}</span>
                <span className="work-slide__tech">{tech}</span>
            </p>

            <p className="work-slide__desc">{desc}</p>
        </a>
    );
};

export default WorkSlide;
