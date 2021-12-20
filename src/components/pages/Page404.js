import React from "react";
import {Link} from "react-router-dom";

import "./Page404.css";
const img_404 =
  require("../../assets/images/pages/404error_626x245.png").default;
export default function Page404() {
  return (
    <React.Fragment>

    <div className="pagenotfound-box">
      <div>
        <img alt="404" src={img_404} />
      </div>
      <div>
        <Link to="/">
          <span>back to home</span>
          <i className="bx bx-home"></i>
        </Link>
      </div>
    </div>
    </React.Fragment>
  );
}
