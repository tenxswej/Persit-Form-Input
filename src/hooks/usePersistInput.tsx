import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useRemember } from "./useRemember";

export const usePersistInput = function (key: string, initialFormData: any) {
   const formRef = useRef<HTMLFormElement | null>(null);
   const focusRef = useRef<HTMLInputElement | null>(null);
   const [item, setItem, removeData] = useLocalStorage(key, initialFormData);
   const { remember, handleRemember } = useRemember();

   useEffect(() => {
      if (focusRef.current !== null) {
         focusRef.current.focus();
      }
   }, []);

   function handleInput(e: ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;

      setItem((previousData: any) => {
         return {
            ...previousData,
            [name]: value,
         };
      });
   }

   function handleRemoveData(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (!remember) {
         removeData();
         focusRef.current?.querySelectorAll("input").forEach((input) => {
            input.value = "";
         });
      }

      alert("You're logged in!");
   }

   return {
      item,
      focusRef,
      formRef,
      handleInput,
      initialFormData,
      handleRemoveData,
      remember,
      handleRemember
   };
};
