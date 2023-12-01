import React from "react";

type InputProps = {
  placeholder: string;
  name: string;
};

const Inputs = ({ placeholder, name }: InputProps) => {
  return (
    <input
      type="text"
      name={name}
      className="mt-1 p-2 w-full border rounded-md"
      placeholder={placeholder}
    />
  );
};

export default Inputs;
