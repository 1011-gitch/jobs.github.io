import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Navigation from "./navigation"
function App() {
  return (
    <>
      <Router>
       <Navigation></Navigation>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/Jobs" component={Jobs}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;