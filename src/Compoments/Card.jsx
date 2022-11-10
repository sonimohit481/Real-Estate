import React from "react";
import "./Card.css";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
export const Card = () => {
  const [Data, SetData] = React.useState([]);
  const data = () => {
    fetch(`http://localhost:8080/data`)
      .then((res) => res.json())
      .then((res) => SetData(res))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    data();
  }, []);
  console.log(Data);
  return (
    <div id="CardSection">
      {Data.map((ele) => {
        return (
          <div className="CardSectionMain">
            {/* image */}
            <div className="CardImage">
              <img src={ele.url} />
            </div>
            {/* with price and fav btn */}
            <div className="price_fav">
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>${ele.price}</span>
                /month
              </div>
              <AiOutlineHeart className="Favbtn" />
            </div>
            {/* name and loc */}
            <div className="card_name_loc">
              <p>{ele.name}</p>
              <p>{ele.loc}</p>
            </div>
            <hr />
            {/* lower section with bed and bath */}
            <div>
              <p>{ele.bed}</p>
              <p>{ele.bath}</p>
              <p>{ele.breadth}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
