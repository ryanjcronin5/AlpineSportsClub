import React from "react";
import Content1 from "./parts/content1";
import Header from "./parts/header";
import { ScrollToTop } from "./parts/scrolltotop";

function Home() {
    return (
        <>
            <ScrollToTop />
            <div className="flex">
                <div className="flex flex-col">
                    <Header />
                    <Content1 />
                </div>
            </div>
        </>

    );
}

export default Home;