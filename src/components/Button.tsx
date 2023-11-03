type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  type = "button",
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`relative bg-red-900 hover:bg-red-700 text-whitefont-bold py-2 px-4 rounded-2xl duration-150 overflow-hidden before:content-['アニメ'] before:rotate-12 before:absolute before:text-3xl before:font-bold before:inset-0 before:opacity-0 hover:before:opacity-25 before:duration-150 before:text-black ${className}`}
      type={type}
      {...rest}
    >
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
