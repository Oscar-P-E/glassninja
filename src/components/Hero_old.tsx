// Hero.tsx

export const Hero = () => {
  return (
    <div className="p-2 pb-0">
      <div className="border border-black p-8">
        <h1 className="text-6xl leading-none pb-6">Window Cleaning</h1>
        <p className="text-xl pb-7">
          Professional window cleaning services on the Sunshine Coast and
          surrounding areas.
        </p>
        <div className="bg-black w-fit h-fit p-1">
        <button className="text-xl bg-black text-white w-fit ml-auto border border-white leading-none px-4 py-2">
          Get A Quote
        </button>
        </div>
      </div>
    </div>
  );
};
