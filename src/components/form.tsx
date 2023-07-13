import React, { useEffect, useRef } from "react";

interface Props {
  onSubmit: (name: string, email: string) => void;
  closeForm: () => void;
}
const Form: React.FC<Props> = ({ onSubmit, closeForm }) => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Disbale Scroll
    document.body.style.overflow = "hidden";
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    if (name && email) {
      onSubmit(name, email);
    }
  };

  return (
    <>
      <div
        className="absolute z-[99] bg-gray-600 left-0 top-0 bottom-0 right-0 opacity-40"
        onClick={closeForm}
      ></div>
      <form
        className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white px-5 py-3 w-[30rem] z-[100] rounded-lg text-black flex flex-col"
        onSubmit={handleFormSubmit}
      >
        <p className="font-bold text-xl">Complete your RSVP</p>
        <p className="text-sm text-gray-500 mt-2 font-medium">
          Fill in your personal information
        </p>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name" className="text-md mt-4 font-medium gap-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="email" className="text-md mt-4 font-medium gap-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            required
          />
        </div>
        <p className="mt-4 font-medium text-gray-400">
          * You have to make the payment at the venue
        </p>
        <button className=" capitalize border px-5 py-2 rounded-xl bg-red-500 text-white justify-center mt-4 inline-block">
          RSVP
        </button>
      </form>
    </>
  );
};

export default Form;
