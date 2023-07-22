import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [cardData, setCardData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://data-project-19is.onrender.com/design");
    const cards = await data.json();

    setCardData(cards);
    setFilter(cards);
    setLoading(false);
  };
  return (
    <div className="App">
      <Filter
        cardData={cardData}
        setFilter={setFilter}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      ></Filter>
      {loading ? (
        <h1 className="spinner">Loading...</h1>
      ) : (
        <motion.div layout className="cards-container">
          <AnimatePresence>
            {filter.map((card) => {
              return <Cards key={card.id} card={card}></Cards>;
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default App;
