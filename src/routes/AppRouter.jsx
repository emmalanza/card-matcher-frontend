import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@routes/ScrollToTop";
import MainLayout from "@layouts/MainLayout";
import SimpleLayout from "@layouts/SimpleLayout";
import Home from "@pages/Home";
import Sets from "@pages/cards/Sets";
import Register from "@pages/users/Register";
import Login from "@pages/users/Login";

const AppRouter = () => (
    <Router>
        <ScrollToTop/>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sets" element={<Sets />} />
            </Route>
            <Route element={<SimpleLayout />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </Router>
);
export default AppRouter;