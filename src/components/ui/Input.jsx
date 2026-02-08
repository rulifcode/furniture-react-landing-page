const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`
        h-[60px]
        w-full
        rounded-lg
        bg-white
        px-4
        text-[#1E1E1E]
        placeholder:text-gray-400
        outline-none
        ${className}
      `}
    />
  );
};

export default Input;
