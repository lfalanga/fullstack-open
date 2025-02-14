const Toast = ({ type, message }) => {
  if (message === null) {
    return null;
  }

  return <div className={`${type}-toast`}>{message}</div>;
};

export default Toast;
