// Decorative dashed ring behind the orbit. Wrapped in `.orbit-ring-spin`
// (see OrbitDishes.css) which rotates it continuously — this is what
// keeps the orbit visually "alive" between the 3.8s featured swaps.
function DashedPath() {
  return (
    <svg
      className="dashed-path"
      viewBox="0 0 620 560"
      fill="none"
    >
      <ellipse
        cx="310"
        cy="280"
        rx="240"
        ry="250"
        stroke="#c7c7c7"
        strokeWidth="1.5"
        strokeDasharray="4 8"
      />
    </svg>
  );
}

export default DashedPath;
