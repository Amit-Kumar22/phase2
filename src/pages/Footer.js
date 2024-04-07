import React, { useEffect, useState } from "react";
import "../Css/footer.css";
import { NavLink } from "react-router-dom";
import telegram from "../asserts/telegram.png";

function Footer() {
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

  const handlecopy = () => {
    alert("Copied to clipboard")
  }

  return (
    <div className="footer">
      <h1>The Story of The Shiba Inu Army Pumping Uranus</h1>

      <div className={`video ${scrollPosition > 2700 ? "animate" : ""}`}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-KJZCYW_pN8?si=8Bs25IzAf0o-FxWi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1>The Memeifesto: Embrace the Wild Side of Crypto</h1>
      <p>
        Welcome to the wild side of crypto - where memes aren't just dreams, and
        astrology isn’t just your daily horoscope.
      </p>
      <button>
        {" "}
        <NavLink to="https://dexscreener.com/solana/cu4pxu7vh7cfgjmsfzfehpp9aj6fa7ciqdsbvs5hekzk">
          View chart on DexScreener
        </NavLink>{" "}
      </button>

      <div className="anus-logo">
        <img
          src={require("../asserts/anus-logo.png")}
          alt="anus-logo"
          height="90px"
          width="70px"
        />
      </div>

      <div className="footer-logo">
        <NavLink to="https://twitter.com/anuscoinsol">
          <img
            className="tele-logo"
            src={require("../asserts/twitter.png")}
            width="40px"
            height="40px"
          />
        </NavLink>

        <NavLink to="https://t.me/UranusCommunity">
          <img
            className="tele-logo"
            src={telegram}
            width="30px"
            height="30px"
          />
        </NavLink>

        <NavLink to="https://www.dextools.io/app/en/solana/pair-explorer/Cu4Pxu7vh7CFGjMsfZFEhpp9Aj6FA7ciQDsbvs5hEkZK?t=1712462179273">
          <img
            className="tele-logo"
            src={require("..//asserts/uranus.png")}
            width="30px"
            height="30px"
            style={{ background: "white", borderRadius: "50%" }}
          />
        </NavLink>

        <div onClick={handlecopy}>
          <img
            className="tele-logo"
            src={require("../asserts/copy.png")}
            width="25px"
            height="25px"
            style={{ background: "white", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
