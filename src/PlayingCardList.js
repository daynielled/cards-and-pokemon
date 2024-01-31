import React from "react";
import {v1 as uuid} from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [data, fetchData, error, setUrl] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")
  
  if(error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => setUrl("https://deckofcardsapi.com/api/deck/new/draw/")}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
