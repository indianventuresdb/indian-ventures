"use client";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  useEffect(() => {
    console.log("pending", pending);
  }, [pending]);
  return (
    <div className="flex justify-center mt-6">
      <button
        type="submit"
        className="rounded-xl sm:px-32 px-6 py-2 border-2 border-gray-50 bg-black text-white hover:bg-gray-800 text-lg sm:text-xl uppercase"
        disabled={pending}
      >
        submit{pending && "....."}
      </button>
    </div>
  );
}
