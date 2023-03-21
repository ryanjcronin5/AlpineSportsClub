import React from "react";

function Header() {
    return (
        <div className="flex flex-col h-screen bg-gray-100 p-3 w-screen bg-header-image bg-no-repeat bg-center bg-local bg-clip-border bg-origin-border bg-cover">
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
            <div className="mt-96 p-3 rounded-lg bg-opacity-75 w-9/12 bg-gray-500 text-white">Alpine Sports Club Inc. (ASC) is a skiing/snowboarding, tramping, mountaineering, and outdoor recreation club based in Auckland New Zealand. ASC has 3 Huts available for members exclusive use during the Summer & Winter Seasons. Our very well-appointed bush Hut in the Waitakere Ranges, an hours drive from downtown Auckland. Located right up on the ridges of Whakapapa Ski Field are ASC's 2 Ski Huts; the A-Frame & Ruapehu Hut.</div>

        </div>
    );
}

export default Header;