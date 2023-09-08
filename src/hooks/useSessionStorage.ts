import React, { useState, useEffect } from "react";

const useSessionStorage = (key: string, initialValue: string) => {
  // Get the initial value from sessionStorage if it exists
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a state variable to hold the current value
  const [value, setValue] = useState<string>(initial);

  // Update sessionStorage whenever the value changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useSessionStorage;
