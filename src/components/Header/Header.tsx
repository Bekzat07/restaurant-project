import React from "react";
import MainIcon from "../../assets/Icon/MainIcon";
import "./style.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mainHeader">
      <MainIcon />
      <div className="link">
        <Link className="paletteWhite" to={"/"}>
          Главная
        </Link>
        <Link to={"/menu"} className="paletteWhite">
          Меню
        </Link>
        <Link to={"/posters"} className="paletteWhite">
          Афиша
        </Link>
        <Link className="paletteWhite" to={""}>
          Сотрудничество
        </Link>
        <Link to={""} className="paletteWhite">
          Галерея
        </Link>
        <Link className="paletteWhite" to={""}>
          Новости
        </Link>
      </div>
      <button className="button">{`бронирование`.toUpperCase()}</button>
    </div>
  );
};
export default Header;
