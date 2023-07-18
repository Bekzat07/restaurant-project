import React, { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";

// styles
import "./style.css";

//firebase
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

//components
import Contacts from "../../components/Contacts/Contacts";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Accordions from "../../components/Collapsible/Collapsible";
import Button from "../../components/Button/Button";

//dats
import { dataForm } from "../../data";

// redux
import { useAppDispatch, useAppSelector } from "../../store";
import { filterFood, selectCurrentData, setFoot } from "../../store/dataSlice";

const MainScreens = () => {
  const [data, setData] = useState<dataForm[]>([]);
  const [event, setEvent] = useState(true);
  const food = useAppSelector(selectCurrentData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    onSnapshot(collection(db, "restaurant"), (snapshot) => {
      setData(snapshot.docs.map((e: any) => e.data()));
    });
  }, []);

  const updateData = async (e: dataForm) => {
    const ref = doc(db, "restaurant", `${e.id}`);
    await updateDoc(ref, { purchase: !e.purchase });
  };

  return (
    <div className="MainScreenContainer">
      <Header />

      <div className="conatinerEvent">
        <img
          src={require("../../assets/image/image.png")}
          className="imageResaurant"
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
                  <Button
                    title={
                      !e.purchase
                        ? `Добавить в заказ ${e.price}₽`
                        : "отменить заказ"
                    }
                    onPress={() => [
                      updateData(e),
                      !e.purchase
                        ? dispatch(setFoot(e))
                        : dispatch(filterFood(e.id)),
                    ]}
                    styles={"foodButton"}
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
