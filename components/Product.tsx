"use client";

export default function Products() {
  return (
    <div id="product" className="min-h-[60vh] w-full py-16 md:py-28 flex flex-col">
      <div className="flex justify-center w-full pb-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Our&nbsp;
        </h2>
        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#4a5ee7]">
          Products
        </h2>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h4 className="text-xl md:text-2xl text-center font-semibold italic">Coming soon, stay tuned!</h4>
      </div>
    </div>
  )
}
