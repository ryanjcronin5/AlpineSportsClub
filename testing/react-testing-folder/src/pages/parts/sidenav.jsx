import { Outlet, Link } from "react-router-dom";

function SideNav() {
    return (
        <>
            <div id="sidenav" className="flex flex-col h-fill p-3 bg-white shadow w-1/3">
                <div className="space-y-3 fixed">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <i className="fas fa-search text-2xl"></i>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-min py-2 pl-10 text-sm rounded-md focus:outline-none" />
                    </div>

                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">

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

                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default SideNav;