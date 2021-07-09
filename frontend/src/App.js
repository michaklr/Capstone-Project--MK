import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManualPage from "./pages/ManualPage";
import ResultPage from "./pages/ResultPage";
import SurveyPage from "./pages/SurveyPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useSurveyQuestions from "./hooks/UseSurveyQuestions";
import useSurveyResults from "./hooks/UseSurveyResults";
import FindHelpPage from "./pages/FindHelpPage";
import usePlaces from "./hooks/UsePlaces";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6B9080",
    },
  },
});

function App() {
  const { surveyQuestions } = useSurveyQuestions();
  const { addAnswer, submitAnswers, surveyAnswers } = useSurveyResults();
  const { places } = usePlaces();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path={"/"} exact>
            <HomePage />
          </Route>
          <Route path={"/manual"} exact>
            <ManualPage />
          </Route>
          <Route path={"/manual/survey"} exact>
            <SurveyPage
              surveyQuestions={surveyQuestions}
              addAnswer={addAnswer}
              submitAnswers={submitAnswers}
            />
          </Route>
          <Route path={"/manual/survey/result"} exact>
            <ResultPage surveyAnswers={surveyAnswers} />
          </Route>
          <Route path={"/manual/survey/result/places"} exact>
            <FindHelpPage places={places} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
