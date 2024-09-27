const Footer = () => {
    const footerStyle = {
      backgroundColor: "#0000",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #ddd"
    };
  
    const divStyle = {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "20px"
      
    };
  
    const linkStyle = {
      textDecoration: "none",
      color: "#337ab7"
      
    };
  
    return (
      <footer style={footerStyle}>
        <div style={divStyle}>
          <p>"© 2024 Your Company Name. All rights reserved."<br />
          "Your privacy is important to us. Read our Privacy Policy."</p>
          <a
            href="https://github.com/avidhanorkar/Vortexa-404"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            GitHub
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
