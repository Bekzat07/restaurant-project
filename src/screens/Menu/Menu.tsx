import React from "react";

// components
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

// styles
import "./style.css";

// components
import Contacts from "../../components/Contacts/Contacts";
import Text from "../../components/Text/Text";
import PriceButton from "../../components/PriceButton/PriceButton";

// redux
import { useAppSelector } from "../../store";
import { selectCurrentData } from "../../store/dataSlice";

const Menu = () => {
  const food = useAppSelector(selectCurrentData);
  return (
    <div className="menuContainer">
      <Header />
      <h1 style={{ color: "white" }}>Позиция в заказе</h1>
      <div className="foodContainer">
        {food.map((e) => {
          return (
            <div className="containerFood">
              <img src={e.foodImage} className="foodImaage" />
              <div>
                <div className="priceContainer">
                  <Text title="Amet donec." color="white" styles={"foodText"} />
                  <PriceButton
                    title={!e.purchase ? `${e.price}₽` : "отменить заказ"}
                    onPress={() => console.log("tgrfde")}
                  />
                </div>
                <Text
                  title={`${e.weight}гр`}
                  color="#D5621D"
                  styles={"content"}
                />
                <Text title={e.content} color="white" styles={"content"} />
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          styles={"positionMenu"}
          title={`оплатить заказ ${food
            .map((e, i) => food[i].price)
            .reduce((a, b) => a + b)}₽`}
        ></Button>
      </div>

      <Contacts />
      <div className="borderMainScreens" />
      <div className="company">
        <Text color="white" title="Copyright © 2022. Все права защищены." />
        <Text color="white" title="Разработано d-e-n.ru" />
      </div>
    </div>
  );
};

export default Menu;
