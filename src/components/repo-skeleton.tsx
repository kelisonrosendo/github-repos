import { Skeleton } from "./ui/skeleton";

export function RepoSkeleton() {
  const items = Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="border-b border-slate-200 py-4">
      <Skeleton className=" h-4 w-[80%]" />

      <div className="flex gap-4 mt-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      </div>
    </div>
  ));

  return <div className="flex flex-col">{items}</div>;
}
