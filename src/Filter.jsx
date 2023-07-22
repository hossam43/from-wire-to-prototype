import { useEffect } from "react";
const Filter = ({ setActiveCategory, activeCategory, cardData, setFilter }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      // jsut don't do anything
      setFilter(cardData);
      return;
    }
    const filtered = cardData.filter((card) =>
      card.category.includes(activeCategory)
    );
    setFilter(filtered);
  }, [activeCategory]);
  return (
    <div className="filter-container">
      <button
        className={activeCategory === "all" ? "active" : ""}
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={activeCategory === "wireframe" ? "active" : ""}
        onClick={() => setActiveCategory("wireframe")}
      >
        wireframes
      </button>
      <button
        className={activeCategory === "page-templets" ? "active" : ""}
        onClick={() => setActiveCategory("page-templets")}
      >
        Page Templets
      </button>
      <button
        className={activeCategory === "prototype" ? "active" : ""}
        onClick={() => setActiveCategory("prototype")}
      >
        {" "}
        Prototypes
      </button>
    </div>
  );
};

export default Filter;
