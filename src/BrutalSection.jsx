import React from "react";
import "./BrutalSection.css";

export default function BrutalSection() {
  const handleArrowClick = () => {
    // Scroll to very top – you can change to a specific section id if you want
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="brutal-section">
      {/* TOP STRIP */}
      <div className="brutal-top">
        <h1 className="brutal-title">AESTHATIC WEARS</h1>

        <button
          type="button"
          className="brutal-arrow"
          onClick={handleArrowClick}
          aria-label="Back to top section"
        >
          <span />
        </button>
      </div>

      {/* SUB CONTENT ROW */}
      <div className="brutal-subrow">
        <div className="brutal-copy">
          <h2 className="brutal-subtitle">
            Wear what feels like sexy
          </h2>

          <p className="brutal-starline">
            <span className="brutal-star">*</span>Wear what feels true to you.
Our designs are shaped with intention — soft tones, clean lines, and silhouettes that let your personality breathe without trying too hard
          </p>
        </div>

        <div className="brutal-dates">1.04–12.04</div>
      </div>

      {/* IMAGE */}
      <div className="brutal-image-wrap">
        <img
          src="../fits.png"
          alt="Brutalist architecture"
        />
      </div>

      {/* FOOTER QUOTE */}
      <footer className="brutal-footer">
        <p>
         © 2025 ✨ Aesthatic Wears — Minimal fits, maximum feeling
        </p>
      </footer>
    </section>
  );
}
