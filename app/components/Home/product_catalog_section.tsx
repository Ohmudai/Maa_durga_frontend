import { useRouter } from "next/navigation";

const products = [
  {
    category: "Wires and Cables",
    desc: "Copper, amoured and flexible wiring",
    status: "In Stock",
  },
  {
    category: "Lights and LEDs",
    desc: "Builds, panels and decorative lighting",
    status: "In Stock",
  },
  {
    category: "Fans and Coolers",
    desc: "Celling, wall-mount and exhaust fans",
    status: "Limited Stock",
  },
  {
    category: "Switches and Sockets",
    desc: "Modular switches, plusg and MCBs",
    status: "In Stock",
  },
];
export function ProductCategoryCards({product}: any) {
  return (
    <div className="flex h-full flex-col  border-1 border-gray-300 w-[170px] p-4  rounded-xl">
      <h5 className="font-semibold text-lg text-primary">{product.category}</h5>
      <small className="mt-3 text-black/40 flex-1">
        {product.desc}
      </small>
      <div className="mt-2 text-xs rounded-lg px-2 py-1 bg-green-200 text-green-500 w-fit">
        {product.status}
      </div>
    </div>
  );
}

export default function ProductCatalogSection() {
    const router = useRouter();
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-y-4">
        <small className="text-md font-semibold text-secondary">
          Product Catalog
        </small>
        <h1 className="md:text-5xl text-4xl font-bold text-primary">Shop By Category</h1>
        <small className="text-sm text-black/40 w-sm mt-1">
          Tap any category to view models, specs and pricing - then message us
          to to check avalability
        </small>
      </div>
      <div  className="mt-8 grid grid-cols-2 md:grid-cols-4 md:gap-y-0 gap-y-4 justify-items-start align-items-center  gap-x-8 ">
        {products.map((product, index) => (
          <div key={index} className="cursor-pointer hover:shadow-lg hover:shadow-primary/50 rounded-xl " onClick={() => router.push(`/products?category=${product.category}`)}>
            <ProductCategoryCards product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
