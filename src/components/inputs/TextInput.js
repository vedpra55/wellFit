import React from "react";

const TextInput = ({ label, name, onChange, value, req, type }) => {
  return (
    <div>
      <p className="mb-1 text-white text-[14px] font-medium">{label}</p>
      <input
        type={type ? type : "text"}
        className="px-4 w-full text-white text-[15px] py-2 rounded-lg bg-black3"
        name={name}
        value={value}
        onChange={onChange}
        required={req}
      />
    </div>
  );
};

export default TextInput;
