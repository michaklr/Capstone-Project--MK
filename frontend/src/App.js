import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={'/'}exact>
            <HomePage />
          </Route>
            <Route path={'/Instructions'}exact>
                <InstructionsPage />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;