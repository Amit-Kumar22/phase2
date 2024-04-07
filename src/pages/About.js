import React, { useEffect, useState } from "react";
import "../Css/about.css";

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="About">
      <div>
        <div className="slide">
          <div className={`section ${scrollPosition > 200 ? "animate" : ""}`}>
            <img src={require("../asserts/evolution.webp")} />
          </div>
          <p className={`paragraph ${scrollPosition > 200 ? "animate" : ""}`}>
            <h1>A Time for Evolution</h1>
            <p>
              Uranus, the ruler of Aquarius, starts 2024 in retrograde, going
              direct on Saturday, January 27, then retrogrades again on Sunday,
              September 1. This suggests ongoing evolution in your home life and
              personal growth.
            </p>
          </p>
        </div>

        <div className="slide slide2">
          <p className={`paragraph2 ${scrollPosition > 700 ? "animate" : ""}`}>
            <h1>Authenticity with Uranus</h1>
            <p>
              Uranus champions individuality, social justice, and authenticity.
              During its retrograde, focus on living by your values and perhaps
              engage more actively in humanitarian efforts. In 2024, the
              location of the Sun on the March equinox is in the constellation
              of Pisces but also on the border of Aquarius. So, we are slowly
              moving into a new age, from Pisces to Aquarius.
            </p>
          </p>
          <div className={`section ${scrollPosition > 700 ? "animate" : ""}`}>
            <img src={require("../asserts/coin.webp")} />
          </div>
        </div>

        <div className="slide">
          <div className={`section ${scrollPosition > 1300 ? "animate" : ""}`}>
            <img src={require("../asserts/uranus.webp")} />
          </div>
          <p className={`paragraph ${scrollPosition > 1300 ? "animate" : ""}`}>
          <h1>Aquarius and Uranus</h1>
            <p>
              Aquarius is ruled by Uranus, the planet that governs innovation,
              technology, and surprising events. Uranus perfectly mirrors
              Aquarius' distinctive attitude, complementing the nontraditional
              nature of these visionary air signs.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
