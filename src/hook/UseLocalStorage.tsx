import React, { useState, useEffect } from "react";

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      if (typeof window !== "undefined") {
        currentValue = JSON.parse(
          localStorage.getItem(key) || String(defaultValue)
        );
      }
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    typeof window !== 'undefined' ??localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
