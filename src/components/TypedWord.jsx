import React, { useEffect, useState } from "react";

export default function TypedWord({ word, className, delay = 0 }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < word.length) {
          setText((prev) => prev + word.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 80);
    }, delay);

    return () => clearTimeout(timeout);
  }, [word, delay]);

  return <span className={className}>{text}</span>;
}
