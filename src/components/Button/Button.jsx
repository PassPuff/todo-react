const Button = ({ onClick, children, title, disable = false }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      title={title}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
