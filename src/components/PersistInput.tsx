import react from "../assets/react.svg";
import { usePersistInput } from "../hooks/usePersistInput";

export default function PersistInput() {
   const userData = {
      email: "",
      fullName: "",
   };
   const { focusRef, formRef, handleInput, item, handleRemoveData, remember, handleRemember } = usePersistInput("persist-form-data", userData);

   return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src={react} alt="logo" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">Persist Form Input</h2>
         </div>

         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form ref={formRef} onSubmit={handleRemoveData} className="space-y-6" action="#" method="POST">
               <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                     Email
                  </label>
                  <div className="mt-2">
                     <input
                        ref={focusRef}
                        value={item.email}
                        onChange={handleInput}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        className="bg-slate-200 block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-800 focus:ring-1 focus:ring-inset focus:ring-indigo-900 sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div>
                  <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-300">
                     full Name
                  </label>
                  <div className="mt-2">
                     <input
                        value={item.fullName}
                        onChange={handleInput}
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="off"
                        className="bg-slate-200 block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-800 focus:ring-1 focus:ring-inset focus:ring-indigo-900 sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div>
                  <div className="flex items-center justify-between">
                     <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                        Password
                     </label>
                  </div>
                  <div className="mt-2">
                     <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        className="bg-slate-200 block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-800 focus:ring-1 focus:ring-inset focus:ring-indigo-900 sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div>
                  <button
                     type="submit"
                     className="mt-12 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Done
                  </button>
               </div>
            </form>

            <div className="mt-10 text-center text-sm text-gray-500 inline-flex items-center justify-end w-full gap-3">
               <i className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Remember Me</i>
               <input type="checkbox" checked={remember} onClick={handleRemember} />
            </div>
         </div>
      </div>
   );
}
