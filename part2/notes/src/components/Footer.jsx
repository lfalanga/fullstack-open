const Footer = () => {
  const footerStyle = {
    color: '#333',
    fontSize: '2vh',
    fontVariant: 'small-caps',
    padding: '1.1vh 1vw',
    border: '1px solid #333',
    backgroundColor: 'rgba(51, 51, 51, 0.25)',
    marginBottom: '2vh',
  };

  return (
    <div style={footerStyle}>
      <strong style={{fontStyle: "normal"}}>FOOTER: CSS INLINE STYLING: </strong>
      <em>COMPUTER SCIENCE, UNIVERSITY OF HELSINKI 2024.</em>
    </div>
  );
};

export default Footer;
