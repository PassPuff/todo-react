const Button = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      type="submit"
    >
      submit
    </button>
  );
};

export default Button;
