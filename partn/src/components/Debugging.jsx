const Debugging = (params) => {
  // console.log("[Debugging.jsx] params:", params);
  const keys = Object.keys(params);
  const values = Object.values(params);
  // console.log(`[Debugging.jsx] keys:${keys}, values:${values}`);

  // eslint-disable-next-line no-unused-vars
  function isArray(o) {
    return Array.isArray(o);
  }

  return (
    <div>
      <h5>Debugging</h5>
      <pre>
        <code
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {values?.map((v, i) => (
            <span key={i}>
              <small>
                <strong
                  title={`'${typeof v}' (do click to copy to clipboard)`}
                  className="debugging-property-name"
                  onClick={() =>
                    navigator.clipboard.writeText(JSON.stringify(v, null, 2))
                  }
                >
                  {keys[i]}
                </strong>
                :{" "}
                <span className="debugging-property-value">
                  {JSON.stringify(v, null, 2)}
                </span>
              </small>
              <br />
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default Debugging;
