import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManualPage from "./pages/ManualPage";
import ResultPage from "./pages/ResultPage";
import SurveyPage from "./pages/SurveyPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import useSurveyQuestions from "./hooks/UseSurveyQuestions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6B9080",
    },
  },
});

function App() {
  const { surveyQuestions } = useSurveyQuestions();

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
            <SurveyPage surveyQuestions={surveyQuestions} />
          </Route>
          <Route path={"/manual/survey/result"} exact>
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
