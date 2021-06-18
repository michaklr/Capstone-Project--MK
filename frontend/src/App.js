import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManualPage from "./pages/ManualPage";
import ErgebnisPage from "./pages/ErgebnisPage";
import SurveyPage from "./pages/SurveyPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6B9080",
    },
  },
});

function App() {
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
            <SurveyPage />
          </Route>
          <Route path={"/manual/survey/result"} exact>
            <ErgebnisPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
