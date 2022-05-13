import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Sections from "../pages/sections/Sections";

export const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sections" element={<Sections />} />
        </Routes>
    );
};
