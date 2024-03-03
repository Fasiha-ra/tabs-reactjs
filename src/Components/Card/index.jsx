import React from "react";
import { CardWrap, Cardstyling } from "./card.styles";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import Button from "../Button";
 
const Data = [
  {
    id: 1,
    bgclr: "5px solid #C4F440",
    title: "Title 1",
    img: card1,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magnam. Rerum exercitationem pariatur veritatis natus saepe corporis incidunt deleniti repellendus.",
    btn: <Button>Show More</Button>,
  },
  {
    id: 2,
    bgclr: "4px solid #1a8cff",
    title: "Title 2",
    img: card2,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magnam. Rerum exercitationem pariatur veritatis natus saepe corporis incidunt deleniti repellendus.",
    btn: <Button>Show More</Button>,
  },
  {
    id: 3,
    bgclr: "5px solid #66ffff",
    title: "Title 3",
    img: card3,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magnam. Rerum exercitationem pariatur veritatis natus saepe corporis incidunt deleniti repellendus.",
    btn: <Button>Show Data</Button>,
  },
  {
    id: 4,
    bgclr: "5px solid #ff1ac6",
    title: "Title 4",
    img: card1,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magnam. Rerum exercitationem pariatur veritatis natus saepe corporis incidunt deleniti repellendus.",
    btn: <Button>Show Data</Button>,
  },
];
const Card = () => {
  return (
    <>
      <CardWrap>
        <div className="container">
          <div className="card-holder">
            {Data.map((val, ind) => {
              return (
                <Cardstyling key={ind} $bgclr={val.bgclr}>
                  <figure>
                    <img src={val.img} alt="card" />
                  </figure>
                  <h3 className="title">{val.title}</h3>
                  <p className="para">{val.para}</p>
                  <div className="btn">{val.btn}</div>
                </Cardstyling>
              );
            })}
          </div>
        </div>
      </CardWrap>
    </>
  );
};

export default Card;
