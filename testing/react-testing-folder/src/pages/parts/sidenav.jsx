import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function SideNav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <div id="sidenav" className="flex flex-col h-fill p-3 bg-white shadow w-1/6">
                <div className="space-y-3 fixed">
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="space-x-72">
                                <div className="CROSS-ICON absolute top-0 right-0 px-1 py-1" onClick={() => setIsNavOpen(false)}>
                                    <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-start space-y-6 justify-between min-h-[15rem] w-80">
                                    <Link to="/">
                                        <li className="rounded-sm hover:bg-slate-100">
                                            <div className="flex items-center p-2 space-x-3 rounded-md">
                                                <i className="fas fa-home text-4xl"></i>
                                                <span className="text-3xl">Home</span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/act_huts">
                                        <li className="rounded-sm hover:bg-slate-100">
                                            <div className="flex items-center p-2 space-x-3 rounded-md">
                                                <i className="fas fa-campground text-4xl"></i>
                                                <span className="text-3xl">Activities & Huts</span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/join_club">
                                        <li className="rounded-sm hover:bg-slate-100">
                                            <div className="flex items-center p-2 space-x-3 rounded-md">
                                                <i className="fas fa-user-plus text-4xl"></i>
                                                <span className="text-3xl">Join The Club</span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/login">
                                        <li className="rounded-sm hover:bg-slate-100">
                                            <div className="flex items-center p-2 space-x-3 rounded-md">
                                                <i className="fas fa-user-circle text-4xl"></i>
                                                <span className="text-3xl">Log In</span>
                                            </div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <ul className="DESKTOP-MENU hidden lg:flex lg:flex-col">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                <button type="submit" className="p-2 focus:outline-none focus:ring">
                                    <i className="fas fa-search text-2xl"></i>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-min py-2 pl-10 text-sm rounded-md focus:outline-none" />
                        </div>
                        <div className="flex-1">
                            <Link to="/">
                                <li className="rounded-sm hover:bg-slate-100">
                                    <div className="flex items-center p-2 space-x-3 rounded-md">
                                        <i className="fas fa-home text-2xl"></i>
                                        <span>Home</span>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/act_huts">
                                <li className="rounded-sm hover:bg-slate-100">
                                    <div className="flex items-center p-2 space-x-3 rounded-md">
                                        <i className="fas fa-campground text-2xl"></i>
                                        <span>Activities & Huts</span>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/join_club">
                                <li className="rounded-sm hover:bg-slate-100">
                                    <div className="flex items-center p-2 space-x-3 rounded-md">
                                        <i className="fas fa-user-plus text-2xl"></i>
                                        <span>Join The Club</span>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/login">
                                <li className="rounded-sm hover:bg-slate-100">
                                    <div className="flex items-center p-2 space-x-3 rounded-md">
                                        <i className="fas fa-user-circle text-2xl"></i>
                                        <span>Log In</span>
                                    </div>
                                </li>
                            </Link>
                        </div>
                    </ul>
                    <style>{`
                        .hideMenuNav {
                            display: none;
                        }
                        .showMenuNav {
                            display: block;
                            position: absolute;
                            width: 100%;
                            height: 100vh;
                            top: 0;
                            left: 0;
                            background: white;
                            z-index: 10;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;
                        }
                    `}</style>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default SideNav;