import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="text-center text-xl sm:text-2xl my-1 uppercase manrope font-extrabold">
      {children}
    </h2>
  );
};

export default Heading;
