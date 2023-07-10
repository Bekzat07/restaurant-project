import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import MainIcon from "../../assets/Icon/MainIcon";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
const MainScreens = () => {
  const [data, setData] = useState<any[]>([]);
  const [event, setEvent] = useState(true);

  useEffect(() => {
    onSnapshot(collection(db, "restaurant"), (snapshot) => {
      setData(snapshot.docs.map((e) => e.data()));
    });
  }, []);

  return (
    <div className="MainScreenContainer">
      <div className="mainHeader">
        <MainIcon />
        <div className="link">
          <p className="screens">Главная</p>
          <p className="screens">Меню</p>
          <p className="screens">Афиша</p>
          <p className="screens">Сотрудничество</p>
          <p className="screens">Галерея</p>
          <p className="screens">Новости</p>
        </div>
        <button className="button">{`бронирование`.toUpperCase()}</button>
      </div>

      <div className="conatinerEvent">
        <img
          src={require("../../assets/image/image.png")}
          style={{ width: 856 }}
        />
        <div>
          <button
            onClick={() => setEvent(true)}
            className={event ? "eventButton" : "eventDisabled"}
          >
            Ближайшие
          </button>
          <button
            onClick={() => setEvent(false)}
            className={!event ? "eventButton" : "eventDisabled"}
          >
            скоро
          </button>
          <div className="event">
            {(event ? data.slice(0, 4) : data.slice(4, 8)).map((e) => {
              return <img src={e.img} className="eventImg" />;
            })}
          </div>
        </div>
      </div>
      {/* <Link to="/menu">bvredws</Link> */}
      <h1 className="screens">Aфиша</h1>
      <div className="imageContainer">
        {data.map((e) => {
          return <img src={e.img} className="img" />;
        })}
      </div>
      <h1 className="screens">{"контакты".toUpperCase()}</h1>
      <div className="geo">
        <div className="information"></div>
        <img src={require("../../assets/image/geo.png")} className="geoImage" />
      </div>
    </div>
  );
};

export default MainScreens;
