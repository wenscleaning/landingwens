export default function DiagonalDivider({
  color = "#ffffff",
  direction = "left",
  className = "",
}: {
  color?: string;
  direction?: "left" | "right";
  className?: string;
}) {
  const polygon =
    direction === "left"
      ? "polygon(0 0, 100% 60%, 100% 100%, 0 100%)"
      : "polygon(0 60%, 100% 0, 100% 100%, 0 100%)";

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-24 ${className}`}
      style={{ clipPath: polygon, backgroundColor: color }}
    />
  );
}
