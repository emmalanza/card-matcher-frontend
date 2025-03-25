import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Sets from "@pages/cards/Sets";
// import Register from "@pages/users/Register";
// import Login from "@pages/users/Login";
import MainLayout from "@layouts/MainLayout";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sets" element={<Sets />} />
            </Route>

            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
        </Routes>
    </Router>
);
export default AppRouter;