import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log("Error retrieving value from localStorage:", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log("Error setting value in localStorage:", err);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
