import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToggleForm from "./components/ToggleForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Users from "./pages/Users.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ToggleForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
};

export default App;
