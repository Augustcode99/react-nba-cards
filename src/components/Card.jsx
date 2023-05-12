import { useState } from "react";
import basketball from "../assets/basketball.png";

const Card = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleFlip = () => {
    setShowImage(!showImage);
  };
  return (
    <div
      onClick={handleFlip}
      className="border-4 border-solid flex flex-col items-center justify-center text-center rounded-2xl bg-white max-w-sm hover:shadow-inner min-h-[22rem]"
    >
      {showImage ? (
        <img
          className="w-full h-72 rounded-2xl transform transition duration-300 hover:scale-90 hover:shadow-2xl"
          src={img}
          alt={name}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <ul className="text-orange-600 text-start font-bold">
            {statistics.map((item, i) => {
              return (
                <li
                  style={{
                    paddingLeft: "30px", // Adjust as needed
                    backgroundImage: `url(${basketball})`,
                    backgroundPosition: "left center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "25px", // Adjust size as needed
                  }}
                  key={i}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <h2 className="font-bold text-lg py-2 ">{name}</h2>
      <p className="hidden">{statistics}</p>
    </div>
  );
};

export default Card;
