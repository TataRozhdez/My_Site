import React, { useState } from "react";
import animateScrollTo from "animated-scroll-to";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./Header.scss";

const Header = () => {
    const [showOnScroll, setShowOnScroll] = useState(false);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y < -108;

            return setShowOnScroll(isShow);
        },
        [showOnScroll],
    );

    const handleOnTop = () => {
        animateScrollTo(0).then(() => {});
    };

    return (
        <>
            {/*<button className="header__item" onClick={handleOnTop}>*/}
            {/*    En*/}
            {/*</button>*/}

            {showOnScroll && <button className="btn__scroll-top" onClick={handleOnTop} />}
        </>
    );
};

export default Header;
