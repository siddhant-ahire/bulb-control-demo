"use client";

import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <main className={isOn ? "page pageOn" : "page"}>
      <section className="panel" aria-label="Bulb controls">
        <p className="eyebrow">SMART HOME</p>
        <h1>Bulb Control</h1>
        <p className="subtitle">Control your light with one tap.</p>

        <div className="bulbArea">
          <div className={isOn ? "bulb bulbOn" : "bulb"} aria-label={isOn ? "Bulb is on" : "Bulb is off"}>
            <span className="bulbHighlight" />
          </div>
          <div className="bulbBase" />
        </div>

        <div className="status" aria-live="polite">
          <span className={isOn ? "statusDot statusDotOn" : "statusDot"} />
          Bulb is <strong>{isOn ? "ON" : "OFF"}</strong>
        </div>

        <div className="buttons">
          <button className="onButton" onClick={() => setIsOn(true)} aria-pressed={isOn}>
            Turn ON
          </button>
          <button className="offButton" onClick={() => setIsOn(false)} aria-pressed={!isOn}>
            Turn OFF
          </button>
        </div>
      </section>
    </main>
  );
}
