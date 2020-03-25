import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Login from "./components/Login";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";

function App() {
  return (
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
                style={{ textAlign: "left", position: "absolute", top: "40%" }}
              >
                <SearchIcon fontSize="large" className="icon" />
                <h4
                  style={{ display: "inline-block", verticalAlign: "bottom" }}
                >
                  Follow your Intrests.
                </h4>
                <br />
                <SupervisorAccountIcon fontSize="large" className="icon" />
                <h4
                  style={{ display: "inline-block", verticalAlign: "bottom" }}
                >
                  Hear what people are talking about.
                </h4>
                <br />
                <ChatIcon fontSize="large" className="icon" />
                <h4
                  style={{ display: "inline-block", verticalAlign: "bottom" }}
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
  );
}

export default App;
