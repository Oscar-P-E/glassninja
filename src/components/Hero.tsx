// Hero.tsx
import { MouseEvent, useState } from "react";
import backgroundImage from "/img/pexels-window-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Contact } from "./Contact";
import { Discount } from "./Discount";
import { Why } from "./Why";
import { Videos } from "./Videos";

export const Hero = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [transformOrigin, setTransformOrigin] = useState({ x: 0, y: 0 });

  const cardContents = [
    { title: "View your Discount", description: "Enjoy 30% off..." },
    { title: "Why Ninja?", description: "A passion for window cleaning..." },
    { title: "Ninja in Action", description: "Extremely satisfying videos..." },
    { title: "Message Us", description: "Write to us anything..." },
  ];

  const handleCardClick = (
    index: number,
    event: MouseEvent<HTMLDivElement>
  ) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setTransformOrigin({ x: mouseX, y: mouseY });
    setActiveCard(activeCard === index ? null : index);
  };

  const renderExpandedContent = () => {
    switch (activeCard) {
      case 0: return <Discount />;
      case 1: return <Why />;
      case 2: return <Videos />;
      case 3: return <Contact />;
      default: return null;
    }
  };

  return (
    <>
      {/* Styles and Background Image */}
      <style>
        {`
          @keyframes grow { from { transform: scale(0.1); } to { transform: scale(1); } }
          @keyframes contentFadeIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          .card { transition: transform 0.3s ease; }
          .card:hover { transform: scale(1.05); }
          .expanded-card {
            padding: 1rem; // Adjust padding as needed
            overflow-y: auto; // Enable scrolling
            max-height: 80vh; // Adjust height as needed
            background-color: rgba(255, 255, 255, 0.9);
          }
          .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: transparent;
            border: none;
            color: black;
            font-size: 1.5rem;
            cursor: pointer;
          }
        `}
      </style>

      <div
        className="flex-1 bg-black flex justify-center items-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-10 p-2 sm:p-4">
          {cardContents.map((card, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 aspect-square h-36 sm:h-64 px-4 py-6 sm:py-8 sm:px-6 flex flex-col justify-between card"
              onClick={(e) => handleCardClick(index, e)}
              style={{ cursor: "pointer", transformOrigin: "center center" }}
            >
              <div style={{ animation: "contentFadeIn 0.5s ease-out forwards" }}>
                <h1 className="text-xl sm:text-4xl leading-none pb-2 sm:pb-4">{card.title}</h1>
                <p className="text-xs sm:text-lg pb-4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Card Overlay */}
        {activeCard !== null && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setActiveCard(null)}
          >
            <div
              className={`bg-white p-4 aspect-square ${activeCard !== null ? "expanded-card" : ""}`}
              style={{
                width: "90vw",
                height: "80vh",
                transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
                animation: "grow 0.5s ease-out forwards",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button sm:pr-2" onClick={() => setActiveCard(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              {renderExpandedContent()}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
