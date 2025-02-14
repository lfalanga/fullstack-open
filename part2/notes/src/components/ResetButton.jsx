const ResetButton = ({ onClick, children }) => {
  return (
    <button type="reset" onClick={onClick} className="button-primary">
      {children}
    </button>
  );
};

export default ResetButton;
