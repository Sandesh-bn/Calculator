import React from 'react';
import { Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from './pages/list';
import NotFound from './pages/404';
import Main from './pages/main';
import './style.css';

const App = () => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Calculator
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <Container>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/list/:id">
            <List />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </div>
      </Container>
    </>
  );
};

export default App;
