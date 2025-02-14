function CustomEvent({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default CustomEvent;
