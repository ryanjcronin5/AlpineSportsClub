import React from "react";

function Header() {
    return (
        <div id="header" className="flex w-full h-auto">
            <div className="p-3">
                <div className="flex flex-row">
                    <div>
                        <img src="logo.png" alt="logo" className="h-16"></img>
                    </div>
                    <div className="h-16 py-4">
                        <h1 className="font-averia-sans-libre hover:font-medium subpiexl-antialiased no-underline non-italic text-4xl text-current text-start tracking-tight uppercase whitespace-normal">
                            alpine sports club
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;