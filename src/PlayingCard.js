import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hook";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipIsFacingUp] = useFlip(true);
 
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
