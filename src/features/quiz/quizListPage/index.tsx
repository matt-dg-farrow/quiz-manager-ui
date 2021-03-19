import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../../components/pageTitle";
import QuizGroup from "../../../components/entityGroup/quizGroup";
import { RootState } from "../../../store/rootReducer";
import { FetchQuizDataAction } from "../redux/action";

export default function QuizListPage(): JSX.Element {
  const dispatch = useDispatch();

  const cssClasses = {
    pageItem: "quiz-page-item",
  };

  const { quizStateData } = useSelector((state: RootState) => ({
    quizStateData: state.FetchQuizDataReducer.quizzes,
  }));

  useEffect(() => {
    dispatch(FetchQuizDataAction());
  }, [dispatch]);

  return (
    <div className="page-content-container">
      <div className={cssClasses.pageItem}>
        <PageTitle text="Quizzes available" />
      </div>
      <div className={cssClasses.pageItem}>
        <QuizGroup quizData={quizStateData} />
      </div>
    </div>
  );
}
