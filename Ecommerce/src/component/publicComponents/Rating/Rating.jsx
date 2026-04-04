"use client";
import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        // Full Star
        if (star <= Math.floor(rating)) {
          return (
            <FaStar
              key={star}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
          );
        }

        // Half Star
        if (star - rating < 1) {
          return (
            <div key={star} className="relative w-5 h-5">
              {/* Empty Star */}
              <FaStar className="absolute w-5 h-5 text-gray-300" />

              {/* Half Fill */}
              <div className="absolute overflow-hidden w-1/2">
                <FaStar className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          );
        }

        // Empty Star
        return <FaStar key={star} className="w-5 h-5 text-gray-300" />;
      })}
    </div>
  );
}
