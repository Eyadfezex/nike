import React from "react";

interface PropsType {
  label: string;
  iconUrl?: any;
  fullWidth?: boolean;
  backgroundColor?: any;

  textColor?: any;
  borderColor?: any;
}

const Button = ({
  label,
  iconUrl,
  fullWidth,
  backgroundColor,
  textColor,
  borderColor,
}: PropsType) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="w-5 h-5 ml-2 rounded-full" />
      )}
    </button>
  );
};

export default Button;
