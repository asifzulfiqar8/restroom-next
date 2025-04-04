const Input = ({ label, type = "text", shadow = false, ...rest }) => {
  return (
    <>
      <label className="text-sm lg:text-base text-[#666666]">{label}</label>
      <input
        {...rest}
        type={type}
        className={`mt-2 outline-none px-4 h-[50px] border-[0.5px] border-[#66666659] rounded-xl w-full text-sm lg:text-base text-[#666666] ${
          shadow && "shadow-input"
        }`}
      />
    </>
  );
};

export default Input;
