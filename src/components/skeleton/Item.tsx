import { SkeletonHeadingComponent } from "./heading"
import { ItemCard } from "./ItemCard"


function Item() {
  return (
    <>
    <SkeletonHeadingComponent />
    <div className="grid gap-4 md:grid-cols-2 mt-4">
        <ItemCard />
        <ItemCard />
        <ItemCard />
    </div>
    </>
  )
}

export default Item