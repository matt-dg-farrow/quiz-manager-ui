import React from "react";

type TitleProps = {
  text: string;
  cssClass?: string;
};

export const PageTitle = ({
  text,
  cssClass = "quiz-manager-page-title",
}: TitleProps): JSX.Element => <div className={`${cssClass}-text`}>{text}</div>;

export default PageTitle;
