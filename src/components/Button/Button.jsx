const Button = ({ children, disable = false, ...props }) => {
  return (
    <button
      disabled={disable}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
