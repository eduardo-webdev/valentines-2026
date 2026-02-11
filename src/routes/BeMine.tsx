import { useState } from "react";
import Typewriter from "../utils/Typewriter";
import { Link } from "react-router-dom";

export default function Propose() {
  const [message, setMessage] = useState("So......");
  const [proposalDisplayed, setProposalDisplayed] = useState(false);
  const [scale, setScale] = useState(1);

  const handleShowProposal = () => {
    setMessage("Will you be my Valentine?? :) ❤️❤️❤️");
    setProposalDisplayed(true);
  };

  const handleRejection = () => {
    setScale((prev) => prev * 0.9);
  };

  return (
    <div className="h-screen w-full bg-linear-to-br from-violet-400 to-pink-500 flex items-center justify-center">
      <h1 className="text-center text-4xl font-bold text-[#e7e1e1] pt-8 px-5">
        <Typewriter text={message} speed={125} />
      </h1>

      {!proposalDisplayed && (
        <button
          onClick={handleShowProposal}
          className="cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
        >
          ...
        </button>
      )}

      {proposalDisplayed && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <Link to="/success">
            <button className="cursor-pointer bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300">
              OBVIO!! ❤️
            </button>
          </Link>
          <button
            onClick={handleRejection}
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.2s ease",
            }}
            className="cursor-pointer bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
          >
            No... 😢
          </button>
        </div>
      )}
    </div>
  );
}
