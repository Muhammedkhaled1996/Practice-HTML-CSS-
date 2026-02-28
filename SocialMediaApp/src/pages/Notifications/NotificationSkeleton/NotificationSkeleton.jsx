import Skeleton from "react-loading-skeleton";

export default function NotificationSkeleton() {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border bg-white border-gray-100">
      {/* Avatar */}
      <Skeleton circle height={40} width={40} className="shrink-0" />

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <Skeleton height={14} width="70%" />

        {/* Comment text */}
        <Skeleton height={12} width="90%" className="mt-2" />

        {/* Actions */}
        <div className="flex items-center gap-3 mt-3">
          <Skeleton circle height={14} width={14} />
          <Skeleton height={12} width={90} />
        </div>
      </div>

      {/* Time + indicator */}
      <div className="flex items-center gap-2 shrink-0">
        <Skeleton height={12} width={35} />
        <Skeleton circle height={8} width={8} />
      </div>
    </div>
  );
}
