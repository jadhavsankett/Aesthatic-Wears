import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import LoveCards from "./loveCards";
import BrutalSection from "./BrutalSection";

const products = [
  {
    id: "p1",
    name: "Slim‑Fit Crop Top",
    price: "cheap ₹",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Istyle Can Floral Print Slim‑Fit Crop Top with Square Neck & Bell Sleeves Casual for Women, 95 % Polyester/5 % Elastane Knit, Trendy Crop Tee for Jeans and Skirts",
    image:
      "https://m.media-amazon.com/images/I/71Pw3k6exfL._SY879_.jpg",
    url: "https://amzn.to/3XC9dSz",
  },
  {
    id: "p2",
    name: "Tie Strap Crop Top",
    price: "cheap ₹",
    sizes: ["40", "41", "42", "43", "44"],
    description: "Solid Asymmetrical Shoulder Tie Strap Crop Top for Women",
    image:
      "https://m.media-amazon.com/images/I/41XgJnqBTqL.jpg",
    url: "https://amzn.to/48DgfLP",
  },
  {
    id: "p3",
    name: "Long Shirt for Women",
    price: "cheap ₹",
    sizes: ["S", "M", "L"],
    description:
      "Leriya Fashion Oversized Shirt for Women | Shirt for Women Stylish Western | Long Shirt for Women",
    image:
      "https://m.media-amazon.com/images/I/61Su7JLpk0L._SY879_.jpg",
    url: "https://amzn.to/4oHiFiC",
  },
  {
    id: "p4",
    name: "Fit Casual Ribbed Tops for Women",
    price: "cheap ₹",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Solid Square Neck Lace Full Sleeve Regular Fit Casual Ribbed Tops for Women",
    image:
      "https://m.media-amazon.com/images/I/71DvLgHwRDL._SY879_.jpg",
    url: "https://amzn.to/3YhwOrG",
  },
  {
    id: "p5",
    name: "Tight- Slim Fitting Ruched Front Ladies",
    price: "cheap ₹",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Sugathari Women's Purple Solid Colour Open Cold Off Shoulder Long Sleeve Lettuce Hem Casual Autumn Trim Tight- Slim Fitting Ruched Front Ladies' Camisole Top, Tee, T-Shirt (T-Shirt 184)",
    image:
      "https://m.media-amazon.com/images/I/71WkvHIT-CL._SY879_.jpg",
    url: "https://amzn.to/3XBQ2bt",
  },
  {
    id: "p6",
    name: "Western Crop Top",
    price: "cheap ₹",
    sizes: ["S", "M", "L", "XL"],
    description: "Stylish Sleeveless Round Neck Ribbed Tank Tops for Women and Western Crop Top",
    image:
      "https://m.media-amazon.com/images/I/81dgmqlS4QL._SX679_.jpg",
    url: "https://amzn.to/4oItd0B",
  },
  {
    id: "p7",
    name: "Girl's Solid Knitted Full Sleeve",
    price: "cheap ₹",
    sizes: ["S", "M", "L","XL"],
    description: "Sugathari Women's & Girl's Solid Knitted Full Sleeve High Neck Ruched Bust Crop Tee Tops",
    image:
      "https://m.media-amazon.com/images/I/719cm6rAyVL._SY879_.jpg",
    url: "https://amzn.to/4pYn2XE",
  },
  {
    id: "p8",
    name: "Toochki Tops for Woman",
    price: "cheap ₹",
    sizes: ["XS", "S", "M", "L"],
    description: "Toochki Tops for Woman | Spandex Top | T-Shirt | Tshirt | Western | for Jeans | Short Sleeve | Stretchable | Floral Printed | White Color",
    image:
      "https://m.media-amazon.com/images/I/712zj0i0TyL._SY879_.jpg",
    url: "https://amzn.to/3Mo7gXp",
  },
];



function App() {
  const [activeProductId, setActiveProductId] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const newArrivalsRef = useRef(null);

  const activeProduct = products.find((p) => p.id === activeProductId) || null;

  // --- ROUTER: sync with ?product= query param ------------------------
  useEffect(() => {
    function applyRouteFromURL() {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("product");
      if (id && products.some((p) => p.id === id)) {
        setActiveProductId(id);
        setSelectedSize(null);
        window.scrollTo(0, 0);
      } else {
        setActiveProductId(null);
        setSelectedSize(null);
      }
    }

    // Initial route
    applyRouteFromURL();

    // Listen to back/forward
    const onPopState = () => {
      applyRouteFromURL();
    };
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const navigateToProduct = (id) => {
    const url = new URL(window.location);
    url.searchParams.set("product", id);
    window.history.pushState({ product: id }, "", url);
    setActiveProductId(id);
    setSelectedSize(null);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    const url = new URL(window.location);
    url.searchParams.delete("product");
    window.history.pushState({}, "", url);
    setActiveProductId(null);
    setSelectedSize(null);
    window.scrollTo(0, 0);
  };

  const handleBuyNow = () => {
    if (!activeProduct || !activeProduct.url) return;
    window.open(activeProduct.url, "_blank", "noopener,noreferrer");
  };

  const handleScrollToProducts = () => {
    if (newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- RENDER HELPERS -------------------------------------------------
  const renderProductGrid = () => (
    <div className="product-grid" id="productGrid">
      {products.map((product) => (
        <a
          key={product.id}
          href={`?product=${encodeURIComponent(product.id)}`}
          className="product-card"
          onClick={(e) => {
            e.preventDefault();
            navigateToProduct(product.id);
          }}
        >
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <div className="product-name">{product.name}</div>
          <div className="product-meta">
            <span className="product-price">{product.price}</span>
            <span>
              {product.sizes[0]}–{product.sizes[product.sizes.length - 1]}
            </span>
          </div>
        </a>
      ))}
    </div>
  );

  const renderSizePills = () => {
    if (!activeProduct) return null;
    return (
      <div className="size-list" id="sizeList">
        {activeProduct.sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={
              "size-pill" + (selectedSize === size ? " selected" : "")
            }
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
    <div className="page-shell">
      {/* NAV */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo-circle">AW</div>
          <div className="nav-title">Aesthatic Wears</div>
        </div>
        <nav className="nav-links">
          <span onClick={navigateToHome}>Home</span>
          <span onClick={() => navigateToProduct(products[0].id)}>Product</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>

      {/* HOME PAGE */}
      {!activeProduct && (
        <div id="homePage" style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          {/* HERO */}
          <section className="hero">
            <div className="hero-content">
              <div className="hero-text-sub">Angel TwoxFive</div>

              <h1 className="hero-title">
                Minimal fits for
                <br />
                maximum confidence.
              </h1>

              <blockquote className="hero-quote">
                “Style is a quiet language. Wear what says the most with the
                least.”
                <cite>— Aesthatic Wears</cite>
              </blockquote>

              <p className="hero-copy">
                Aesthatic Wears – clean silhouettes, calm tones and everyday
                pieces that still feel like a flex.
              </p>

              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  type="button"
                  id="checkProductBtn"
                  onClick={() => navigateToProduct(products[0].id)}
                >
                  Check out product page <span>↗</span>
                </button>
                <button
                  className="btn-ghost"
                  type="button"
                  id="scrollToProducts"
                  onClick={handleScrollToProducts}
                >
                  Browse new arrivals
                </button>
              </div>
            </div>

            <div className="hero-side-image" aria-hidden="true">
              <div className="hero-badge">new drop · aw/24</div>
            </div>
          </section>

          {/* NEW ARRIVALS */}
          <section className="section" id="newArrivals" ref={newArrivalsRef}>
            <div className="section-header">
              <h2 className="section-title">New Arrivals</h2>
              <div className="tabs">
                <div className="tab">Men</div>
                <div className="tab active">Women</div>
                <div className="tab">Workout</div>
              </div>
            </div>

            {renderProductGrid()}
          </section>
        </div>
      )}

      {/* PRODUCT PAGE */}
      {activeProduct && (
        <div id="productPage" style={{ display: "block", flex: 1 }}>
          <div
            className="back-link"
            id="backLink"
            onClick={(e) => {
              e.preventDefault();
              navigateToHome();
            }}
          >
            <span>←</span>
            <span>Back to New Arrivals</span>
          </div>

          <div className="product-layout">
            <div>
              <h1 className="product-info-title" id="detailName">
                {activeProduct.name}
              </h1>
              <div className="product-info-price" id="detailPrice">
                {activeProduct.price}
              </div>
              <p className="product-info-description" id="detailDescription">
                {activeProduct.description}
              </p>

              <div className="size-label">Select size</div>
              {renderSizePills()}

              <div className="product-actions">
                <button
                  className="btn-buy"
                  type="button"
                  id="buyNow"
                  onClick={handleBuyNow}
                >
                  Buy Now <span>→</span>
                </button>
              </div>
              <p className="delivery-note">
                Wear what feels like sexy.
              </p>
            </div>

            <div className="product-detail-image-wrap">
              <img
                id="detailImage"
                className="product-detail-image"
                src={activeProduct.image}
                alt={activeProduct.name}
              />
            </div>
          </div>
        </div>
      )}
    </div>
<LoveCards />
<BrutalSection/>
    </>
  );
}

export default App;
