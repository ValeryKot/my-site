import { useState, useEffect } from "react";

function useLocalStorage(initialValue, key) {
  const getValue = () => {
    console.log('first GetValue')
    const storage = localStorage.getItem(key); // string || null

    if (storage) {
      return JSON.parse(storage); // '[]', '{}', ''
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

