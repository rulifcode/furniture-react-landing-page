const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`h-[60px] px-6 rounded-lg bg-[#1E1E1E] text-white font-medium hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
