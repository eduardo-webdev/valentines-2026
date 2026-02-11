import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}
