import { useState, useEffect } from "react";


export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get items from localStorage
  //const storedData = localStorage.getItem(key);
  //const initialData = storedData ? JSON.parse(storedData) : initialValue;
  const initialData = initialValue;
  const [data, setData] = useState<T>(initialData);

  // Update localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData] as const;
}
