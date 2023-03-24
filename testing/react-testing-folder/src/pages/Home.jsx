import React from "react";
import Content1 from "./parts/content1";
import Header from "./parts/header";
import SideNav from "./parts/sidenav";

function Home() {
    return (
        <>
            <div className="flex">
                <SideNav />
                <div className="flex flex-col">
                    <Header />
                    <Content1 />
                </div>
            </div>
        </>

    );
}

export default Home;