import * as React from "react"
function HomeHeader() {
    return (
        <>
            {/* Header Image */ }
            <img src = ".\img\image1.png" alt = "Looking down snowy mountaions" ></img >

            {/* Info Header */ }
            <div className = "py-3 px-5 rounded-lg bg-opacity-75 bg-gray-600 text-white text-justify mx-4 my-2" >
                <p className="align-middle">
                    Alpine Sports Club Inc. (ASC) is a sking/snowboarding, tramping, mountaineering, and outdoor recreation club based in Auckland New Zealand. ASC has 3 Huts available for members exclusive use during the Summer & Winter Seasons. Our very well-appointed bush Hut in the Waitakere Ranges, an hours drive from downtown Auckland. Located right up on the ridges of Whakapapa Ski Field are ASC's 2 Ski Huts; the A-Frame & Ruapehu Hut.
                </p>
            </div >
        </>
    );
}
export default HomeHeader;