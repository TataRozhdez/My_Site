import { useRef, useLayoutEffect } from "react";

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = () => {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = document.body;
    const position = target.getBoundingClientRect();

    return { x: position.left, y: position.top };
};

export const useScrollPosition = (effect, deps) => {
    const position = useRef(getScrollPosition());

    const callBack = () => {
        const currPos = getScrollPosition();
        effect({ prevPos: position.current, currPos });
        position.current = currPos;
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", callBack);

        return () => window.removeEventListener("scroll", callBack);
    }, deps);
};
