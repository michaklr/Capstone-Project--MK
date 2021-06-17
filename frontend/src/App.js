import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ManualPage from "./pages/ManualPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={'/'}exact>
            <HomePage />
          </Route>
            <Route path={'/manual'}exact>
                <ManualPage />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;