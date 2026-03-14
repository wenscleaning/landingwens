export default function BoltPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-[0.06] pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 60'%3E%3Cpolygon points='20,0 30,25 22,25 30,60 10,30 18,30' fill='%23ffffff'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 80px",
      }}
    />
  );
}
