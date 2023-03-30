import React from "react";

function Content1() {
    return (
        <div className="flex flex-col w-auto h-auto">
            {/* Header Image */}
            <img src="image1.png" alt="Looking down snowy mountaions"></img>

            {/* Info Header */}
            <div className="py-3 px-5 rounded-lg bg-opacity-75 bg-gray-600 text-white text-justify mx-4 my-2">
                <p className="align-middle">
                    Alpine Sports Club Inc. (ASC) is a skiing/snowboarding, tramping, mountaineering, and outdoor recreation club based in Auckland New Zealand. ASC has 3 Huts available for members exclusive use during the Summer & Winter Seasons. Our very well-appointed bush Hut in the Waitakere Ranges, an hours drive from downtown Auckland. Located right up on the ridges of Whakapapa Ski Field are ASC's 2 Ski Huts; the A-Frame & Ruapehu Hut.
                </p>
            </div>

            {/* Page Nav Bar */}
            <nav className="bg-white border-gray-200">
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col p-4 place-content-center md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white">
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#news">Clubs News</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#huts">Huts</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#nights">Club Nights</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#mag">ASC Magazine</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#">Club Events</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#history">History</a>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-current md:bg-transparent hover:bg-gray-100 rounded-md">
                            <a href="#rules">Club Rules</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Club News */}
            <div className="py-3 px-5 mx-4 my-2" id="#news">
                <p className="text-xl leading-loose">Club News</p>
            </div>

            {/* Club Huts*/}
            <div className="py-3 px-5 mx-4 my-2" id="#huts">
                <div className="flex flex-row justify-center">

                    {/* Waitakere Hut */}
                    <div className="flex justify-center mx-1">
                        <div
                            className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                Waitakere Hut
                            </h5>
                            <p className="mb-4 text-base text-neutral-600">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-current shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Button
                            </button>
                        </div>
                    </div>

                    {/* Ruapehu Hut */}
                    <div className="flex justify-center mx-1">
                        <div
                            className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                Ruapehu Hut
                            </h5>
                            <p className="mb-4 text-base text-neutral-600">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-current shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Button
                            </button>
                        </div>
                    </div>

                    {/* A Frame */}
                    <div className="flex justify-center mx-1">
                        <div
                            className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                                Ruapehu A Frame Lodge
                            </h5>
                            <p className="mb-4 text-base text-neutral-600">
                                Sleeps 18 persons on individual bunks in two separate bunk rooms plus four on window seat squabs.
                            </p>
                            <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-current shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Club Nights */}
            <div className="py-3 px-5 mx-4 my-2" id="#nights">
                <p className="text-xl leading-loose">Club Nights</p>
                <p className="text-justify">
                    On the first Tuesday of each month (except January) at 7:30pm.
                    Meetings are held at the St Marks Church Community Hall, 5 St Marks Road, Remuera.
                    Following Club notices/discussion, there is usually a guest speaker on a related topic.
                    Tea, coffee and biscuits usually follow at the end of the meeting.
                    There is no charge for Club nights.
                    The Annual General Meeting is normally held at the June Club meeting each year.
                </p>
            </div>

            {/* Club Magazine */}
            <div className="py-3 px-5 mx-4 my-2" id="#mag">
                <p className="text-xl leading-loose">Alpine Sports Club Magazine</p>
                <p>Alpinesport is published bi-monthly except for January in electronic format and is free of charge. Additional copies of the magazine are available on request.</p>
            </div>

            {/* Club Events */}
            <div className="py-3 px-5 mx-4 my-2" id="#events">
                <p className="text-xl leading-loose">Club Events</p>
            </div>

            {/* Club History */}
            <div className="py-3 px-5 mx-4 my-2" id="#history">
                <p className="text-xl leading-loose">Club History</p>
            </div>

            {/* Club Rules */}
            <div className="py-3 px-5 mx-4 my-2" id="#rules">
                <p className="text-xl leading-loose">Club Rules</p>
            </div>

        </div>
    );
}
export default Content1;