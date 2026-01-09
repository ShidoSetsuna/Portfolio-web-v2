import { useState, useEffect } from "react";
import "./counter.scss";

function GlobalCounter() {
  const [count, setCount] = useState("...");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/counter")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Could not load count", err));
  }, []);

  const handleBtnClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/counter", { method: "POST" });
      const data = await res.json();
      setCount(data.count);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="global-counter">
      <h1 className="global-counter__header">Global Clicker</h1>
      <button
        onClick={handleBtnClick}
        disabled={loading}
        className="global-counter__button">
        {loading ? "Saving..." : `${count}`}
      </button>
      <p className="global-counter__description">
        Every click is saved for everyone!
      </p>
    </section>
  );
}

export default GlobalCounter;
