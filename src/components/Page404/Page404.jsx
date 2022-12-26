import React from "react";
import { Link } from "react-router-dom";

import "./Page404.scss";

const Page404 = () => {
    return (
        <div className="page-404">
            <Link to="/" className="page-404__link">
                Back to Home
            </Link>

            <div className="lighter">
                <span className="light" />
            </div>
        </div>
    );
};

export default Page404;
