import React from "react";
import "./Card.css";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BiBed } from "@react-icons/all-files/bi/BiBed";
import { BiBath } from "@react-icons/all-files/bi/BiBath";
import { BiSquareRounded } from "@react-icons/all-files/bi/BiSquareRounded";
export const Card = ({ initialFilter }) => {
  const { loc, date, price, type } = initialFilter;
  const [Data, SetData] = React.useState([]);
  const data = () => {
    //  if we dont use a json server
    SetData([
      {
        id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMX_hSXJiR0Z-JQ1ObWo_wBUuTIFVmbw8gZiS1AYSn&s",
        price: "1500",
        name: "ABC",
        loc: "sirsa",
        bed: 2,
        bath: 1,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "house",
        date: 20190101,
      },
      {
        id: 2,
        url: "https://psgroup.in/blog/wp-content/uploads/2020/12/photo-1560185127-6ed189bf02f4.jpeg",
        price: "2000",
        name: "DEF",
        loc: "hisar",
        bed: 3,
        bath: 1,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "flat",
        date: 20190301,
      },
      {
        id: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMX_hSXJiR0Z-JQ1ObWo_wBUuTIFVmbw8gZiS1AYSn&s",
        price: "1800",
        name: "LKJ",
        loc: "sirsa",
        bed: 3,
        bath: 2,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "house",
        date: 20190606,
      },
      {
        id: 4,
        url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
        price: "7000",
        name: "AOOOBC",
        loc: "delhi",
        bed: 5,
        bath: 3,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "Villa",
        date: 20190101,
      },
      {
        id: 5,
        url: "https://psgroup.in/blog/wp-content/uploads/2020/12/photo-1560185127-6ed189bf02f4.jpeg",
        price: "2500",
        name: "TUH",
        loc: "Tohana",
        bed: 1,
        bath: 1,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "flat",
        date: 201900601,
      },
      {
        id: 6,
        url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
        price: "4500",
        name: "BDC",
        loc: "hisar",
        bed: 4,
        bath: 4,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "Villa",
        date: 20190101,
      },
      {
        id: 7,
        url: "https://foyr.com/learn/wp-content/uploads/2021/08/modern-office-design.png",
        price: "600",
        name: "mmm",
        loc: "delhi",
        bed: 2,
        bath: 2,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "Office",
        date: 20190726,
      },
      {
        id: 8,
        url: "https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=",
        price: "80000",
        name: "Vilo",
        loc: "sirsa",
        bed: 6,
        bath: 6,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "Villa",
        date: 20200517,
      },
      {
        id: 9,
        url: "https://psgroup.in/blog/wp-content/uploads/2020/12/photo-1560185127-6ed189bf02f4.jpeg",
        price: "5000",
        name: "LED",
        loc: "sisar",
        bed: 3,
        bath: 2,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "flat",
        date: 20191201,
      },
      {
        id: 10,
        url: "https://foyr.com/learn/wp-content/uploads/2021/08/modern-office-design.png",
        price: "9500",
        name: "CDSS",
        loc: "delhi",
        bed: 3,
        bath: 2,
        length: 5,
        breadth: 5,
        popular: "false",
        type: "Office",
        date: 20190401,
      },
    ]);
    // if i have a json server runnion in backgroung
    // fetch(`http://localhost:8080/data`)
    //   .then((res) => res.json())
    //   .then((res) => SetData(res))
    //   .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    data();
  }, []);
  let showData = Data;
  if (loc && showData.length) {
    showData = showData.filter((item) => item.loc === loc);
  }
  if (price && showData.length) {
    showData = showData.filter((item) => item.price <= price);
  }
  if (date && showData.length) {
    showData = showData.filter((item) => item.date <= date);
  }
  if (type && showData.length) {
    showData = showData.filter((item) => item.type === type);
  }
  return (
    <div id="CardSection">
      {showData.map((ele) => {
        return (
          <div className="CardSectionMain" key={ele.id}>
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
            <div id="card_footer">
              <p>
                <span>
                  <BiBed className="cardlogo" />
                </span>
                {ele.bed}
              </p>
              <p>
                <span>
                  <BiBath className="cardlogo" />
                </span>
                {ele.bath}
              </p>
              <p>
                <span>
                  <BiSquareRounded className="cardlogo" />
                </span>
                {ele.length}x{ele.breadth}m<sup>2</sup>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
