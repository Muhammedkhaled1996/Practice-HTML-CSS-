type Review = {
  _id: string;
  review: string;
  rating: number;
  user: { _id: string; name: string };
};

type Props = {
  reviews: Review[];
};

export default function RatingBars({ reviews }: Props) {
  // حساب عدد كل rating
  const ratingCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) {
      ratingCounts[r.rating]++;
    }
  });

  const totalReviews = reviews.length;

  return (
    <div className="flex-1 w-full">
      {[5, 4, 3, 2, 1].map((star) => {
        const count = ratingCounts[star] || 0;
        const percentage = totalReviews ? (count / totalReviews) * 100 : 0;

        return (
          <div key={star} className="flex items-center gap-3 mb-2">
            <span className="text-sm text-gray-600 w-8">{star} star</span>

            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="text-sm text-gray-500 w-10">
              {Math.round(percentage)}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
