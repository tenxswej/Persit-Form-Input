import { useState } from "react";

export const useRemember = function () {
   const [remember, setRemember] = useState(false);

   function handleRemember() {
      setRemember(!remember);
   }

   return { remember, handleRemember };
};
