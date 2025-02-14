const SubmitButton = ({ children }) => {
  return (
    <button type="submit" className="button-primary">
      {children}
    </button>
  );
};

export default SubmitButton;
