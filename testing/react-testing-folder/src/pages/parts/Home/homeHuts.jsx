function HomeHuts() {
    return (
        <div className="py-3 px-5 mx-4 my-2" id="huts">
            <div className="flex mobileS:flex-col mobileM:flex-col mobileL:flex-col laptop:flex-row desktop:flex-row tablet:flex-col justify-center">

                {/* Waitakere Hut */}
                <div className="flex desktop:flex-col justify-center mx-1">
                    <img src="..\img\image1.png" alt="Alt" className="max-w-sm hover:scale-110 transition duration-500 ease-in-out"></img>
                    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
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
                <div className="flex desktop:flex-col justify-center mx-1">
                    <img src="..\img\image1.png" alt="Alt" className="max-w-sm hover:scale-110 transition duration-500 ease-in-out"></img>
                    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
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
                <div className="flex desktop:flex-col justify-center mx-1">
                    <img src="..\img\image1.png" alt="Alt" className="max-w-sm hover:scale-110 transition duration-500 ease-in-out"></img>
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

    );
}
export default HomeHuts;