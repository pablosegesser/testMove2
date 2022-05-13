import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MyStreams from "../pages/mystreams/Mystreams";

export const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mystreams" element={<MyStreams />} />
        </Routes>
    );
};
