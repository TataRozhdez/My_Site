import React from "react";

import "./About.scss";

const SKILLS_CONFIG = [
    {
        text: "HTML/CSS/SCSS",
        percent: 90,
    },
    {
        text: "JS/TS/React",
        percent: 88,
    },
    {
        text: "Storybook/Figma",
        percent: 79,
    },
    {
        text: "HTTP/REST",
        percent: 75,
    },
    {
        text: "Webpack/Docker",
        percent: 70,
    },
    {
        text: "Node/Express",
        percent: 65,
    },
];

const About = () => {
    return (
        <div className="about _app-block">
            <div className="about-skills">
                {SKILLS_CONFIG.map(({ text, percent }, index) => (
                    <div className="skill-box" key={`${percent}-${index}`}>
                        <div className={`pie-wrapper progress-${percent}`}>
                            <span className="label">
                                {percent}
                                <span className="smaller">%</span>
                            </span>

                            <div className="pie">
                                <div className="left-side half-circle" />
                                <div className="right-side half-circle" />
                            </div>

                            <div className="shadow" />
                        </div>

                        <span className="skill-box__text">{text}</span>
                    </div>
                ))}
            </div>

            <div className="about-text">
                <p className="text__greeting">Hi there!</p>

                <p>
                    &nbsp;&nbsp;My name is Tetiana. I’m vegetarian, lucky and clever person. I like learning new things
                    and entertaining challenges.
                </p>

                <p>
                    &nbsp;&nbsp;In my free time, I like read books, practicing yoga, walking in the park and spending
                    time with my friends.
                </p>

                <p>
                    &nbsp;&nbsp;My favorite book: "Jonathan Livingston Seagull". She teaches that nothing is impossible
                    in the world and that if you want something and go to it with all your heart, it will come true.
                </p>

                <p>
                    &nbsp;&nbsp;My favorite skill: Googling. I can find the best solution to the task by searching the
                    Internet and analyzing the answers received.
                </p>

                <p className="text__end">With love, Tata 💜</p>
            </div>
        </div>
    );
};

export default About;
