// // Header.tsx
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    // <div className="p-2 pb-0">
    <div className="bg-black max-h-40">
      {/* <div className="border border-white p-2"> */}
      <div className="mx-auto w-fit">
        {/* <div className="w-full flex justify-between p-4">
            <button className="text-4xl text-white">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button className="border border-white leading-none px-4 py-2 text-white">
              Contact Us
            </button>
          </div> */}
        <img
          src="/img/glass-ninja-image.png"
          alt="Glass Ninja Logo"
          className="h-40"
        />
      </div>
      {/* </div> */}
    </div>
    // </div>
  );
};
