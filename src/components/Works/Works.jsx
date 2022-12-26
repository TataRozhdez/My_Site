import React, { useCallback } from "react";

import { useMedia } from "../../hooks/useMedia";
import { usePagination } from "../../hooks/usePagination";
import { WORKS } from "./Works.config";
import WorkSlide from "./WorkSlide";
import ImageArrow from "../../resources/images/arrow.png";

import "./Works.scss";

const Works = () => {
    const pagination = usePagination(WORKS, 3);

    const onNextPage = useCallback(() => {
        pagination.setPage((prevState) => {
            if (prevState < pagination.totalPages) {
                return prevState + 1;
            }

            return prevState;
        });
    }, [pagination.totalPages]);

    const onPrevPage = useCallback(() => {
        pagination.setPage((prevState) => {
            if (prevState > 0) {
                return prevState - 1;
            }

            return prevState;
        });
    }, []);

    return (
        <div className="works _app-block">
            <p className="works__title">Example of works:</p>

            <div className="works__container">
                {pagination.data.map((props) => (
                    <WorkSlide key={props.id} {...props} />
                ))}
            </div>

            <div className="works__pagination">
                <button onClick={onPrevPage} disabled={pagination.page <= 0} className="btn-prev">
                    <img src={ImageArrow} alt="Prev" />
                </button>
                <button onClick={onNextPage} disabled={pagination.page === pagination.totalPages} className="btn-next">
                    <img src={ImageArrow} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Works;
