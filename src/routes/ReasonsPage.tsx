import { Link } from "react-router-dom";

export default function ReasonsPage() {
  const reasons: { id: number; title: string; to: string }[] = [
    { id: 1, title: "Reason One", to: "/reasons/1" },
    { id: 2, title: "Reason Two", to: "/reasons/2" },
    { id: 3, title: "Reason Three", to: "/reasons/3" },
    { id: 4, title: "Reason Four", to: "/reasons/4" },
  ];

  return (
    <>
      <section className="h-auto w-full bg-linear-to-br from-violet-400 to-pink-500">
        {/* Header */}
        <div className="h-auto w-full flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-[#e7e1e1] pt-8 px-5">
            Please click each on reason 🙂‍↕️❤️
          </h1>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-rows-4 gap-4 p-10 h-[70vh] sm:grid-rows-none sm:grid-cols-4">
          {reasons.map((reason) => (
            <Link key={reason.id} to={reason.to}>
              <div className="cursor-pointer h-full bg-linear-to-t from-pink-200 to-pink-300 bg-opacity-20 rounded-2xl p-4 flex items-center justify-center transition hover:scale-105">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-[#ffffff]">
                  {reason.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="py-5 h-[30vh] flex justify-center items-start gap-4">
          <Link to="/">
            <button className="cursor-pointer bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300">
              Back &larr;
            </button>
          </Link>
          <Link to="/be-mine">
            <button className="cursor-pointer bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300">
              All done? ❤️
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
