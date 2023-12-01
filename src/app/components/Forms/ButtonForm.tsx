import React from "react";

const ButtonForm = ({ title }: { title: string }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      {title}
    </button>
  );
};

export default ButtonForm;
