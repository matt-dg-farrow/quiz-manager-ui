import * as React from "react";

const Footer = (): JSX.Element => (
  <footer style={{ boxShadow: "none" }}>
    <div className="wrapper-footer">
      <div>
        <p className="footer-message">WebbiSkools Ltd</p>
      </div>
      <div className="footer-menu">
        <ul>
          <li>
            <a href="#0">Feedback</a>
          </li>
          <li>
            <a href="#0">Help</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
