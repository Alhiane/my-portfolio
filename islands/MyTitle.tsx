import { useEffect, useState } from "preact/hooks";

import TitleTyping from "../components/titles/TitleTyping.tsx";

export default function MyTitle(props: { name: string; greetingType: string }) {
  const greetingType = "I'am";
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGreeting(greetingType.slice(0, greeting.length + 1));
    }, 150);
    return () => clearTimeout(timeout);
  }, [greeting]);

  useEffect(() => {
    if (greetingType.length === greeting.length) {
      const timeout = setTimeout(() => {
        setName(props.name.slice(0, name.length + 1));
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [name, greeting]);

  return <TitleTyping name={name} greeting={greeting} greetingLength={greetingType.length} />;
}
