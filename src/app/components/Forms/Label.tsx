import React from "react";

type LabelProps = {
  title: string;
  htmlFor: string;
};

const Label = ({ title, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-600"
    >
      {title}
    </label>
  );
};

export default Label;
