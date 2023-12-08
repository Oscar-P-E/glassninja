// // Header.tsx
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:flex-row justify-between items-center pb-6 sm:pb-0 sm:px-14">
        <span className="flex-1 shrink-0 flex"></span>
        <img
          src="/img/glass-ninja-image.png"
          alt="Glass Ninja Logo"
          className="h-40"
        />
        <a
          href="tel:0412571316"
          className="text-xl sm:text-2xl md:text-3xl text-white whitespace-nowrap flex flex-1 justify-center sm:justify-end items-center"
        >
          <FontAwesomeIcon className="pr-2 sm:pr-4" icon={faPhone} />
          0412 571 316
        </a>
      </div>
    </div>
  );
};
