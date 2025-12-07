import React, { useRef } from "react";
import "./loveCards.css";

const loveCards = [
  {
    id: 1,
    title: "attractive Look",
    subtitle: "Creature Black & Green Sunglasses",
    image: "https://m.media-amazon.com/images/I/81HS7SZaItL._SX679_.jpg",
    featured: false,
    link: "https://amzn.to/3XBhAhb", // <-- ADD YOUR REAL LINK
  },
  {
    id: 2,
    title: "Irresistible Scent",
    subtitle: "Lv Imagination Inspired Perfume",
    image: "https://m.media-amazon.com/images/I/61QP3sMs9cL._SX679_.jpg",
    featured: true,
    link: "https://amzn.to/3XILksq", // <-- ADD YOUR REAL LINK
  },
  {
    id: 3,
    title: "Timeless Accessory",
    subtitle: "Carlington Stainless Steel Analog Wrist Watches",
    image: "https://m.media-amazon.com/images/I/7116gDt2j5L._SX679_.jpg",
    featured: false,
    link: "https://amzn.to/4prwmTU", // <-- ADD YOUR REAL LINK
  },
  {
    id: 4,
    title: "Stay Fresh",
    subtitle: "Chemist at Play UnderArm Roll-On Deodorant",
    image:
      "https://m.media-amazon.com/images/I/41OGbgikn4L._SY300_SX300_QL70_FMwebp_.jpg",
    featured: false,
    link: "https://amzn.to/4iFlCyy", // <-- ADD YOUR REAL LINK
  },
];

export default function LoveCards() {
  const scrollRef = useRef(null);

  const handleBuy = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleArrowClick = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    container.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="love-section">
      <div className="love-text">
        <p className="love-kicker">There's a Perfect Combo</p>
        <p className="love-heading">
          For You | <span>Aesthatic Wears.</span>
        </p>
      </div>

      <div className="love-cards-wrapper">
        <button
          className="love-arrow love-arrow-left"
          type="button"
          onClick={() => handleArrowClick("left")}
        >
          ﹤
        </button>

        <div className="love-cards" ref={scrollRef}>
          {loveCards.map((card) => (
            <div
              key={card.id}
              className={
                "love-card" + (card.featured ? " love-card--featured" : "")
              }
            >
              {/* TEXT */}
              <div className="love-card-top">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>

              {/* IMAGE */}
              <div className="love-card-image-wrap">
                <img src={card.image} alt={card.title} />
              </div>

              {/* FOOTER */}
              <div className="love-card-footer">
                <span className="love-card-line" />
                <button
                  className="love-buy-btn"
                  onClick={() => handleBuy(card.link)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="love-arrow love-arrow-right"
          type="button"
          onClick={() => handleArrowClick("right")}
        >
          ﹥
        </button>
      </div>
    </section>
  );
}
