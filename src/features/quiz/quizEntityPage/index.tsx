import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../../components/pageTitle";
import QuizItem from "../../../components/entityItem/quizItem";
import store from "../../../store";
import { RootState } from "../../../store/rootReducer";
import { FetchQuizDataAction } from "../redux/action";
import { Quiz } from "../../../globals/types";

type QuizEntityPageProps = { quizId: string };

export default function QuizEntityPage(
  props: QuizEntityPageProps
): JSX.Element {
  const quizId: number = parseInt(props.quizId);

  const cssClasses = {
    pageItem: "quiz-page-item",
  };

  // const dispatch = useDispatch();

  // const { quizStateData } = useSelector((state: RootState) => ({
  //   quizStateData: state.FetchQuizDataReducer.quizzes,
  // }));

  // useEffect(() => {
  //   if (quizStateData.length === 0) dispatch(FetchQuizDataAction());
  // }, [dispatch, quizStateData.length]);

  // Above code is currently WIP, but will be later implemented so that when a user refreshes
  // on this page, it will no longer state that quizSelected is undefined.

  const quizSelected: Quiz = store
    .getState()
    .FetchQuizDataReducer.quizzes.filter((quiz) => {
      return quiz.id === quizId;
    })[0];

  return (
    <div className="page-content-container">
      <div className={cssClasses.pageItem}>
        <PageTitle text={quizSelected.title} />
      </div>
      <div className={cssClasses.pageItem}>
        <QuizItem quiz={quizSelected} view="single" />
      </div>
    </div>
  );
}
