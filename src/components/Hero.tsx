// Hero.tsx
import "/src/hero.css";

export const Hero = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen relative">
      {/* Left Image */}
      <div
        className="bg-image bg-image-first"
        style={{
          left: 0,
          backgroundPosition: "right center",
          backgroundImage: "url('/img/G.png')",
        }}
      />
      {/* Right Image */}
      <div
        className="bg-image bg-image-last"
        style={{
          right: 0,
          backgroundPosition: "left center",
          backgroundImage: "url('/img/N.png')",
        }}
      />
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center max-w-7xl z-10 text-gray-300">
        <h1 className="text-6xl font-bold text-center ">
          Glass Ninja Window Cleaner
        </h1>
        <p className="pt-4 text-xl ">
          Professional window cleaning services on the Sunshine Coast and
          surrounding areas.
        </p>
        <button className="px-4 py-2 mt-8 text-gray-300 bg-black border-2 border-gray-300 rounded hover:bg-gray-300 hover:text-black">
          Learn More
        </button>
      </div>
    </div>
  );
};
