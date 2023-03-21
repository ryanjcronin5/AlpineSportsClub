import React from "react";

function Header() {
    return (
        <div className="flex flex-row h-screen bg-gray-100 p-3 w-screen">
            <div>
                <img src="logo.png" alt="" className="h-16"></img>
            </div>
            <div className="h-16 py-4">
                <h1 className="font-averia-sans-libre hover:font-medium subpiexl-antialiased no-underline non-italic text-4xl text-current text-start tracking-tight uppercase whitespace-normal">
                    alpine sports club
                </h1>
            </div>
        </div>
    );
}

export default Header;