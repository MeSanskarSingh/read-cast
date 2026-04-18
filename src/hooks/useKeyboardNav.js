import { useEffect } from "react";

export default function useKeyboardNav(handlers = {}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const fn = handlers[event.key];

      if (typeof fn === "function") {
        event.preventDefault();
        fn(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [handlers]);
}