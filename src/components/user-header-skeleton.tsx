import { Skeleton } from "./ui/skeleton";

export function UserHeaderSkeleton() {
  return (
    <>
      <Skeleton className="rounded-full flex-shrink-0 w-[140px] h-[140px]" />

      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </>
  );
}
