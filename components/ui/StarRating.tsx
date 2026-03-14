import { Star } from "lucide-react";

export default function StarRating({ score = 5 }: { score?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < score
              ? "fill-brand-yellow text-brand-yellow"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}
