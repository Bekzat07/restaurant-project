import React from "react";
import "./style.css";
const Contacts = () => {
  return (
    <>
      <h1 className="screens">{"контакты".toUpperCase()}</h1>
      <div className="geo">
        <div className="information"></div>
        <img src={require("../../assets/image/geo.png")} className="geoImage" />
      </div>
    </>
  );
};
export default Contacts;
