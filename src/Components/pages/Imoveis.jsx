import React from "react";
import {Route , Link, Outlet} from "react-router-dom";
import im79703 from "./imoveis/Im79703";

export default function Imoveis() {
  return (
    <>
      {/* imoveis menu */}
      <button><Link to="im79703">im79703</Link></button>
      <Outlet/>
    </>
  );
}
