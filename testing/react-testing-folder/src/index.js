import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import SideNav from './pages/parts/sidenav';
import NoPage from './pages/NoPage';
import Act_Huts from './pages/parts/act_huts';
import Join_Club from "./pages/parts/join_club";
import Login from "./pages/parts/login";
import * as React from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SideNav />}>
                    <Route index element={<Home />} />
                    <Route path="act_huts" element={<Act_Huts />} />
                    <Route path="join_club" element={<Join_Club />} />
                    <Route path="login" element={<Login />} />

                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();