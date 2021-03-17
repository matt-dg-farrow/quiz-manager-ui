import * as React from "react";

const Header = (): JSX.Element => (
  <div className="quiz-manager-header-container">
    <header
      className="quiz-manager-header"
      role="banner"
      data-module="quiz-manager-header"
    >
      <div className="quiz-manager-header-content-container">
        <a
          aria-current="page"
          className="quiz-manager-header-link quiz-manager-header-link--homepage"
          href="/"
        >
          Quiz Manager
        </a>
      </div>
    </header>
  </div>
);

export default Header;
