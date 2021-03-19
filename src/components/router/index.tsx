import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../../features/loginPage";
import QuizEntityPage from "../../features/quiz/quizEntityPage";
import QuizListPage from "../../features/quiz/quizListPage";
import Footer from "../footer";
import Header from "../header";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route
        exact
        path="/quiz"
        render={() => (
          <>
            <Header />
            <QuizListPage />
            <Footer />
          </>
        )}
      />
      <Route
        exact
        path="/quiz/:quizId"
        render={(props) => (
          <>
            <Header />
            <QuizEntityPage quizId={props.match.params.quizId} />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}
