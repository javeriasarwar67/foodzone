import { useState } from "react";

// +/- quantity control shown before the Order Now button
function QuantitySelector({ onChange }) {
  const [qty, setQty] = useState(2);

  const update = (next) => {
    const value = next < 1 ? 1 : next;
    setQty(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="qty-selector">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => update(qty - 1)}
      >
        −
      </button>

      <span>{String(qty).padStart(2, "0")}</span>

      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => update(qty + 1)}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
