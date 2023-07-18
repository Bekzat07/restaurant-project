import React from "react";

//styles
import "./style.css";

//components
import Text from "../Text/Text";
const Contacts = () => {
  return (
    <>
      <Text color="white" styles="text_h" title={"контакты".toUpperCase()} />
      <div className="geo">
        <div className="information">
          <div className="adress">
            <Text
              color="white"
              title={"Адрес".toUpperCase()}
              styles={"text_h1"}
            />
            <Text
              color="white"
              title={"Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)".toUpperCase()}
              styles={"text_p1"}
            />

            <Text
              color="white"
              title={"телефон".toUpperCase()}
              styles={"text_h1"}
            />
            <Text
              color="white"
              title={"+7 (812) 713-1945".toUpperCase()}
              styles={"text_p1"}
            />
            <Text
              color="white"
              title={"режим работы".toUpperCase()}
              styles={"text_h1"}
            />
            <Text
              color="white"
              title={"Ежедневно с 12:00 до 06:00".toUpperCase()}
              styles={"text_p1"}
            />
          </div>
          <div className="border" />
          <div className="adress">
            <Text
              color="white"
              title={"директор".toUpperCase()}
              styles={"text_h1"}
            />
            <Text
              color="white"
              title={"Лидия Эмильевна, +7(921) 963-55-50".toUpperCase()}
              styles={"text_p1"}
            />
            <Text
              color="white"
              title={"арт-директор".toUpperCase()}
              styles={"text_h1"}
            />
            <Text
              color="white"
              title={"Илиния Ионашко, +7(981) 989-43-30".toUpperCase()}
              styles={"text_p1"}
            />
          </div>
        </div>
        <img src={require("../../assets/image/geo.png")} className="geoImage" />
      </div>
    </>
  );
};
export default Contacts;
