import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Page404 from "./components/Page404";
import "./resources/index.scss";

export const RenderApp = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(RenderApp);
