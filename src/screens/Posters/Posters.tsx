import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Posters = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    onSnapshot(collection(db, "restaurant"), (snapshot) => {
      setData(snapshot.docs.map((e) => e.data()));
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="Poster">
        <h1 className="screens">Aфиша</h1>
        <div className="imageContainer">
          {data.map((e) => {
            return <img src={e.img} className="img" />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Posters;
