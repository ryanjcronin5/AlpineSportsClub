import React from "react";
import Content1 from "./parts/content1";
import Header from "./parts/header";
import { ScrollToTop } from "./parts/scrolltotop";
import HomeHeader from "./parts/Home/homeHeader";
import HomeNav from "./parts/Home/homeNav";
import HomeNews from "./parts/Home/homeNews";
import HomeHuts from "./parts/Home/homeHuts";
import HomeNights from "./parts/Home/homeNights";

function Home() {
    return (
        <>
            <ScrollToTop />
            <div className="flex w-min">
                <div className="flex flex-col">
                    <Header />
                    <HomeHeader />
                    <HomeNav />
                    <HomeNews />
                    <HomeHuts />
                    <HomeNights />
                </div>
            </div>
        </>

    );
}

export default Home;