import React from "react";
import { motion } from "framer-motion";
const Cards = ({ card }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card-border"
    >
      <h2>{card.title}</h2>
      <img src={card.href} alt="" />
      <h5>{card.category}</h5>
    </motion.div>
  );
};
export default Cards;
