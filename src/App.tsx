
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "./layout";
import Challenge from "./pages/Challenge";
import MyRecord from "./pages/MyRecord";
import News from "./pages/News";

export default function App() {
  return (
    // @ts-ignore
    <Router>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/my-record" />
          <Route exact path="/my-record">
            <MyRecord />
          </Route>
          <Route path="/challenge">
            <Challenge />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
