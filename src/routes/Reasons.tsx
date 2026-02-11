import { Link } from "react-router-dom";

export function Reason({
  reasonNumber,
  reasonText,
}: {
  reasonNumber: string;
  reasonText: string;
}) {
  return (
    <>
      <section className="h-screen w-full bg-linear-to-br from-violet-400 to-pink-500">
        <div className="flex flex-col px-5 h-full items-center justify-center text-center font-bold text-[#ffffff]">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            {reasonNumber}
          </h1>
          <br />
          <div className="sm:text-2xl text-[#ebebeb] md:w-3/4">
            {reasonText}
          </div>
        </div>
        <Link to="/reasons">
          <button className="cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-pink-500 font-bold py-3 px-6 sm:px-12 sm:py-6 sm:text-2xl rounded-full shadow-lg hover:bg-pink-100 transition duration-300">
            Back &larr;
          </button>
        </Link>
      </section>
    </>
  );
}

export function ReasonOne() {
  return (
    <Reason
      reasonNumber={"Reason One"}
      reasonText="Because I enjoy your presence more than anyone else's in the world ❤️ Whereas I feel drained being around others for too long, time with you is what makes me feel happy and recharged ❤️"
    />
  );
}

export function ReasonTwo() {
  return (
    <Reason
      reasonNumber={"Reason Two"}
      reasonText="I know you are the right choice to be my valentines every year because being with you keeps me motivated ❤️ The vision we have of having our own spot and experiencing the freedom to be ourselves together is a big motivator ❤️"
    />
  );
}

export function ReasonThree() {
  return (
    <Reason
      reasonNumber={"Reason Three"}
      reasonText="Because you save me from myself 😅❤️ I appreaciate having you around to stop me from my bad habits and encouraging me to touch grass 🥸❤️"
    />
  );
}

export function ReasonFour() {
  return (
    <Reason
      reasonNumber={"Reason Four"}
      reasonText="Because I really really really really really really really really really really really really really really really really really really really really really really really really lob you ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ I am grateful for all the memories we've made together so far and I never want to stop making more with you ❤️❤️❤️
      "
    />
  );
}
