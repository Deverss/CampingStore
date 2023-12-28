import React from 'react';
import Breadcrumbs from "../../../components/Breadcrumbs";
import Nhau from "./nhau.js";


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
    title: "Nhau Dau Nhau Day",
    url: "/games/nhau_dau_nhau_day"
  }
];

function NhauDauNhauDay() {
  

  return (
    <>
      <div>
        <Breadcrumbs value={breadcrumbs} />
      </div>
      <Nhau />
    </>
  );
}

export default NhauDauNhauDay;
