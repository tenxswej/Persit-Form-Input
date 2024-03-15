import { useState } from "react";

export const useLocalStorage = function <T>(key: string, initialValue: T): [T, (x: T) => void, () => void] {
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const item = window.localStorage.getItem(key);

         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.log(error);
         return initialValue;
      }
   });

   const setValue = (value: T): void => {
      try {
         const valueToStore = value instanceof Function ? value(storedValue) : value;

         setStoredValue(valueToStore);

         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         console.log(error);
      }
   };

   const removeValue = () => {
      window.localStorage.removeItem(key);
   };

   return [storedValue, setValue, removeValue];
};
