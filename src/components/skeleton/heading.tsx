import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonHeadingComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="border rounded-full p-2">
        <Skeleton className="h-8 w-[150px] md:w-[300px] lg:w-[400px] rounded-md mx-4 md:mx-1 m-1" />
      </div>
      <div className="hidden md:flex flex-grow max-w-full w-1/3 md:w-auto mb-4 md:mb-0">
        <Skeleton className="h-1 w-full rounded-md" />
      </div>
    </div>
  );
}
