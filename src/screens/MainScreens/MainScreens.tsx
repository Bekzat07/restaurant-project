import React, { useEffect, useState } from "react";
import "./style.css";
import { Accordion } from "react-accessible-accordion";

//firebase
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

//components
import Contacts from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import PriceButton from "../../components/PriceButton/PriceButton";
import Accordions from "../../components/Collapsible/Collapsible";

interface dataForm {
  id: number;
  purchase: boolean;
  img: string;
  foodImage: string;
  price: number;
  weight: number;
  content: string;
}
const MainScreens = () => {
  const [data, setData] = useState<dataForm[]>([]);
  const [event, setEvent] = useState(true);

  useEffect(() => {
    onSnapshot(collection(db, "restaurant"), (snapshot) => {
      setData(snapshot.docs.map((e: any) => e.data()));
    });
  }, []);

  const updateData = async (e: dataForm) => {
    console.log("id", `${e.id}`);
    const ref = doc(db, "restaurant", `${e.id}`);
    console.log(ref);
    await updateDoc(ref, { purchase: !e.purchase });
  };
  return (
    <div className="MainScreenContainer">
      <Header />
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
      <Text
        color="white"
        styles={"kitchenText"}
        title={"Кухня".toUpperCase()}
      />
      <div className="kitchenContainer">
        {data.map((e) => {
          return (
            <div className="containerFood">
              <img src={e.foodImage} className="foodImaage" />
              <div
                style={{
                  height: 111,
                }}
              >
                <div className="priceContainer">
                  <Text title="Amet donec." color="white" styles={"foodText"} />
                  <PriceButton
                    title={!e.purchase ? `${e.price}₽` : "отменить заказ"}
                    onPress={() => updateData(e)}
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
      <div>
        <Accordion allowZeroExpanded={true} className="accordionContainer">
          <Accordions itemButton="Loudspeakers" />
          <Accordions itemButton="Loudspeakers" />
          <Accordions itemButton="fferf" />
        </Accordion>
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

export default MainScreens;
