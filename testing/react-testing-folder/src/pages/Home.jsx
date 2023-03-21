import React from "react";
import Header from "./parts/header";
import SideNav from "./parts/sidenav";

function Home() {
    return (
        <>
            <div className="flex">
                <SideNav />
                <Header />
            </div>
        </>

    );
}

export default Home;