type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { type = "button", children, ...rest } = props;

  return (
    <button
      className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-2xl"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
