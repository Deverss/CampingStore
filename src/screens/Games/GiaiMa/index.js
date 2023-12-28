import React from 'react';
import Breadcrumbs from "../../../components/Breadcrumbs";
import Giai from "./giai.js";


const breadcrumbs = [
    {
        title: "Home page",
        url: "/",
    },
    {
        title: "Games",
        url: "/games",
    },
    {
        title: "Giai Ma",
        url: "/games/giai_ma",
    }
];

function GiaiMa() {
    return (
        <div>
            <div>
            <Breadcrumbs value={breadcrumbs} />
            </div>
            <Giai />
        </div> 
    );
}

export default GiaiMa;