import React, { Component } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import Dashboard from "./components/Dashboard/Home";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.authenticated);
    return (
      //comment this to skip login
      <div>
        {!this.props.authenticated ? (
          <Grid container>
            <Grid item xs={6}>
              <div
                className="App"
                style={{
                  backgroundColor: "#42abf5",
                  backgroundImage: `url(${process.env.PUBLIC_URL}/logo.png)`
                }}
              >
                <Grid container>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
                    <div
                      style={{
                        textAlign: "left",
                        position: "absolute",
                        top: "40%"
                      }}
                    >
                      <SearchIcon fontSize="large" className="icon" />
                      <h4
                        style={{
                          display: "inline-block",
                          verticalAlign: "bottom"
                        }}
                      >
                        Follow your Intrests.
                      </h4>
                      <br />
                      <PeopleOutlineIcon fontSize="large" className="icon" />
                      <h4
                        style={{
                          display: "inline-block",
                          verticalAlign: "bottom"
                        }}
                      >
                        Hear what people are talking about.
                      </h4>
                      <br />
                      <ModeCommentOutlinedIcon
                        fontSize="large"
                        className="icon"
                      />
                      <h4
                        style={{
                          display: "inline-block",
                          verticalAlign: "bottom"
                        }}
                      >
                        Join the conversation.
                      </h4>
                    </div>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Login />
            </Grid>
          </Grid>
        ) : (
          <Dashboard />
        )}
      </div>
      //uncomment this to got to home page directly
      // <Dashboard />
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(App);
