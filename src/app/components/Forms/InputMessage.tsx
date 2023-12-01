import React from "react";

const InputMessage = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      id="mensagem"
      name="mensagem"
      rows={4}
      className="mt-1 p-2 w-full border rounded-md"
      placeholder={placeholder}
    />
  );
};

export default InputMessage;
