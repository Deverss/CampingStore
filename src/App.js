import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import cn from "classnames";
import "./styles/app.sass";
import Page from "./components/Page";
import About from "./screens/About";
import CareersPage from "./screens/CareersPage";
import Cart from "./screens/Cart";
import Category from "./screens/Category";
import Checkout from "./screens/Checkout";
import Contacts from "./screens/Contacts";
import Faq from "./screens/Faq";
import Home from "./screens/Home";
import LegalPage from "./screens/LegalPage";
import Login from "./screens/Login";
import Product from "./screens/Product";
import Search from "./screens/Search";
import SignUp from "./screens/SignUp";
import Sitemap from "./screens/Sitemap";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/about"
          render={() => (
            <Page>
              <About />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/category"
          render={() => (
            <Page>
              <Category />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/careers-page"
          render={() => (
            <Page>
              <CareersPage />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/cart"
          render={() => (
            <Page>
              <Cart />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/checkout"
          render={() => (
            <Page>
              <Checkout />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/contacts"
          render={() => (
            <Page>
              <Contacts />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/faq"
          render={() => (
            <Page>
              <Faq />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/legal-page"
          render={() => (
            <Page>
              <LegalPage />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/login"
          render={() => (
            <Page>
              <Login />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/product"
          render={() => (
            <Page>
              <Product />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/search"
          render={() => (
            <Page>
              <Search />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/sign-up"
          render={() => (
            <Page>
              <SignUp />
            </Page>
          )}
        ></Route>
        <Route
          exact
          path="/sitemap"
          render={() => (
            <Page>
              <Sitemap />
            </Page>
          )}
        ></Route>
        <Route
          render={() => (
            <Page>
              <div className={cn("section")}>
                <div className={cn("center")}>
                  <h1>
                    Whoops! <br />
                    Page not found..
                  </h1>
                </div>
              </div>
            </Page>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
