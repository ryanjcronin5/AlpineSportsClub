import React from 'react';
import Header from "./parts/header";
import SideNav from "./parts/sidenav";

function NoPage() {
    return (
        <>
            <div className="flex">
                <SideNav />
                <div className="flex flex-col">
                    <Header />
                </div>
            </div>
        </>

    );
}

export default NoPage;