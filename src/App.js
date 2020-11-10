import React from 'react'
import { Route, Switch, Link} from 'react-router-dom';
import Card from './Card';
import Detail from './Detail';

import withStyles from 'react-jss';

const styles = {
  header: {
    display: "flex",
    boxSizing: "border-box",
    height: "65px",
    margin: "0rem",
    backgroundColor: "#d9d9d9",
    '& a': {
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "15rem",
      textDecoration: "none",
      color: "black",
      fontSize: "2rem",
      fontFamily: "sans",
      fontWeight: "lighter",
      fontStyle: "italic"
    }
  }
}

function App(props) {
  const { classes } = props;

  return (
    <div className="App">
      <nav className={classes.header}>
        <Link to="/">BreakingBad</Link>
        {/* <Link to="/details/:id" >Details</Link> */}
      </nav>
      <Switch>
        <Route exact path="/" component={Card} />
        <Route exact path="/details/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
