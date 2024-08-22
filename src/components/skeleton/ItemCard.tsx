import { Skeleton } from "@/components/ui/skeleton";

export function ItemCard() {
  return (
    <div className="m-2">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <Skeleton className="h-12 w-12 rounded-full mr-3" />
          <div>
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-3 w-[100px] mt-1" />
          </div>
        </div>
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="p-4">
        <Skeleton className="h-4 w-[200px]" />
        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className="h-6 w-[80px] rounded-md mr-2 mb-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
