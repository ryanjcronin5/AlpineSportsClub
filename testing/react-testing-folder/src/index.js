import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import SideNav from './pages/parts/sidenav';
import NoPage from './pages/NoPage';
import Act_Huts from './pages/act_huts';
import Join_Club from "./pages/join_club";
import Login from "./pages/login";
import * as React from "react";

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex">
                <SideNav /> {/* Render your Sidebar component */}
                <div className="flex-1">
                    {/* Use Outlet to render child routes */}
                    <Routes>
                        <Route path="/" element={<Outlet />}>
                            <Route index element={<Home />} />
                            <Route path="act_huts" element={<Act_Huts />} />
                            <Route path="join_club" element={<Join_Club />} />
                            <Route path="login" element={<Login />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();