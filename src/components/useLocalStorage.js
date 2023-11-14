import { useState, useEffect } from "react";

export default function useLocalStorage(initialState) {
  const [value, setValue] = useState(function () {
    const selection = localStorage.getItem("selected");
    if (selection) {
      return JSON.parse(selection);
    } else {
      return initialState;
    }
  });

  useEffect(
    function () {
      localStorage.setItem("selected", JSON.stringify([...value]));
    },
    [value]
  );
  return [value, setValue];
}
