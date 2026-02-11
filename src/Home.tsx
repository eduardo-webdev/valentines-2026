import { Link } from "react-router-dom";
import Typewriter from "./utils/Typewriter";

export default function Home() {
  return (
    <>
      <section className="h-screen w-full bg-linear-to-br from-violet-400 to-pink-500">
        <div className="flex px-5 h-full items-center justify-center text-center text-2xl sm:text-4xl md:text-5xl font-bold text-[#e7e1e1]">
          <h1 className="">
            <Typewriter
              text="Reasons Why I'd Like For You To Be My Valentines :D ❤️"
              speed={75}
            />
          </h1>
        </div>
        <Link to="/reasons">
          <button className="cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300">
            Next &rarr;
          </button>
        </Link>
      </section>
    </>
  );
}
