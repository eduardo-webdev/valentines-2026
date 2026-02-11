import Confetti from "react-confetti-boom";

export default function Success() {
  return (
    <div className="h-screen w-full bg-linear-to-br from-violet-400 to-pink-500 flex items-center justify-center">
      <Confetti
        className="absolute top-0 left-0 w-full h-full"
        mode="fall"
        particleCount={100}
        colors={["#ff6b6b", "#4ecdc4", "#ffe66d"]}
      />
      <img src="src/assets/celebrate.GIF" alt="Success" className="w-70 h-70" />
      <h1 className="text-center text-4xl font-bold text-[#e7e1e1] pt-8 px-5 absolute top-10">
        THANK YOUUUU!! I HOPE YOU ENJOY THE DONUTS ❤️❤️❤️
      </h1>
    </div>
  );
}
