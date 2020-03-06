import React from 'react';
import Header from "../components/Header";
import {BrowserRouter, Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Login from "../components/Login";
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import createHistory from 'history/createBrowserHistory'; //grab the history create browser history to create your own
//browser history

export const history = createHistory();

const AppRouter = () => {
  return (
      // <BrowserRouter>
      <Router history={history}>
          {/*use router instead of browser router, so we can provide our own history and export it*/}
          <div> {/*actually have a single element as react component expects*/}
              <Header/>
              <Switch>
                  <Route path="/" component={Login} exact={true}/>
                  <Route path="/dashboard" component={ExpenseDashboard}/>
                  <Route path="/create" component={AddExpense}/>
                  <Route path="/edit/:id" component={EditExpense}/>
                  <Route path="/help" component={Help}/>
                  <Route component={NotFound}/>
                  {/*switch moves through all routes, and stops when finding a match*/}
                  {/*switch goes through all routes one by one, and if it doesn't find any, it returns the always matching NotFoundPage component*/}
              </Switch>
          </div>
      </Router>
      // </BrowserRouter>
  );
};

export default AppRouter;
