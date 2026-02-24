import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Skeleton circle width={44} height={44} />
          <div className="flex flex-col gap-1.5">
            <Skeleton width={120} height={14} />
            <Skeleton width={180} height={10} />
          </div>
        </div>
        <Skeleton width={24} height={24} borderRadius={12} />
      </div>

      {/* Body */}
      <div className="mt-3">
        <Skeleton count={2} />
      </div>

      {/* Stats */}
      <div className="flex justify-between mt-3 pt-3 border-t border-gray-100">
        <Skeleton width={60} height={12} />
        <Skeleton width={180} height={12} />
      </div>
    </div>
  );
}
