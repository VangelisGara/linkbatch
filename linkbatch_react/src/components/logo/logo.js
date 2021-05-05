import React from "react";
import "./logo.css";
import logoPng from "../../assets/link.png";

function logo() {
   return (
      <div className="Logo">
         <img src={logoPng} alt="Logo" />
         <h2> Link Batch</h2>
         <h3>One link to share them all !</h3>
      </div>
   );
}

export default logo;
