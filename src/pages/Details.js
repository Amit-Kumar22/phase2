import React, { useEffect, useState } from "react";
import "../Css/detail.css";
import { NavLink } from "react-router-dom";

function Details() {
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
    <div className="deails" id="deails">
      <h2 className="details-heading">Journey to Uranus: Acquire $ANUS</h2>
      <div className="box-container">
        <div className={`box ${scrollPosition > 1800 ? "animate" : ""}`}>
          <ul>
            <li>
              Here's a concise and beginner-friendly guide for purchasing the
              Uranus token (ANUS) on the Solana network. This guide will help
              you navigate the process smoothly, starting from setting up a
              wallet to making your first ANUS transaction.
            </li>
          </ul>
        </div>

        <div className={`box ${scrollPosition > 1900 ? "animate" : ""}`}>
          <h1>1. Prepare For Entry</h1>
          <ul>
            <li>Buy Solana (SOL) on any exchange.</li>
            <li>
              Install{" "}
              <NavLink to="https://solflare.com/">Solflare Wallet</NavLink>.
              Follow the instructions to set up your wallet and securely store
              your seed phrase.
            </li>
            <li>
              Withdraw SOL from your exchange to your Solflare wallet
              (Copy/paste your Solflare address).
            </li>
          </ul>
        </div>

        <div className={`box ${scrollPosition > 2000 ? "animate" : ""}`}>
          <h1>2. Get into Uranus ($ANUS)</h1>
          <ul>
            <li>
              Go to{" "}
              <NavLink to="https://jup.ag/swap/SOL-ANUS_9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc">
                Jupiter Exchange
              </NavLink>{" "}
              to buy $ANUS.
            </li>
            <li>
              Confirm you're not putting it in the wrong $ANUS. The token
              address should be
              <a to="9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc">
                {" "}
                9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc.
              </a>
            </li>
            <li>Hit "Connect Wallet" and select your Solflare wallet.</li>
            <li>Click "Swap" to trade your $SOL for $ANUS.</li>
          </ul>
        </div>

        <div className={`box ${scrollPosition > 2300 ? "animate" : ""}`}>
          <h1>3. Keep pumping Uranus</h1>
          <ul>
            <li>
              Spread Uranus by sharing this link{" "}
              <NavLink to="https://anusexplorer.com/">
                https://anusexplorer.com/
              </NavLink>
            </li>
            <li>
              Watch the charts as Uranus gets pumped on{" "}
              <NavLink to="https://dexscreener.com/solana/cu4pxu7vh7cfgjmsfzfehpp9aj6fa7ciqdsbvs5hekzk">
                DEX Screener
              </NavLink>
            </li>
          </ul>
        </div>
          <p className="instruction">
            The revolution is underway, you’re still early. Uranus: it’s more
            than a load of hot air. It’s the downfall of the false rulers of
            humanity 🙂
          </p>
      </div>
    </div>
  );
}

export default Details;
