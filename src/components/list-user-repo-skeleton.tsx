import { Skeleton } from "./ui/skeleton";

export function ListUserRepoSkeleton() {
  const items = Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="flex items-center gap-4 border-b py-4">
      <Skeleton className="rounded-full flex-shrink-0 w-[60px] h-[60px]" />

      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ));

  return <>{items}</>;
}
