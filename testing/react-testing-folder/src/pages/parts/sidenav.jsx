import React from "react";

function SideNav() {
    return (
        <div id="sidenav" className="flex flex-col h-screen p-3 bg-white shadow w-60">
            <div className="space-y-3">

                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button type="submit" className="p-2 focus:outline-none focus:ring">
                            <i className="fas fa-search text-2xl"></i>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none" />
                </div>

                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">

                        <li className="rounded-sm">
                            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <i className="fas fa-home text-2xl"></i>
                                <span>Home</span>
                            </a>
                        </li>

                        <li className="rounded-sm">
                            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <i className="fas fa-campground text-2xl"></i>
                                <span>Activities & Huts</span>
                            </a>
                        </li>

                        <li className="rounded-sm">
                            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <i className="fas fa-user-plus text-2xl"></i>
                                <span>Join The Club</span>
                            </a>
                        </li>

                        <li className="rounded-sm">
                            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <i className="fas fa-user-circle text-2xl"></i>
                                <span>Log In</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideNav;