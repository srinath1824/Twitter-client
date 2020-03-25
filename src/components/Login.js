import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={5} style={{ position: "relative", top: "25vh" }}>
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
            />
            <h2>See what's happening in the world right now</h2>
            <h3>Join Twitter today.</h3>
            <TextField
              label="Phone or email"
              variant="outlined"
              fullWidth={true}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth={true}
              style={{ marginTop: "20px" }}
            />
            <Grid container>
              <Grid item xs={6}>
                <Button
                  style={{
                    backgroundColor: "#1eabe8",
                    color: "white",
                    borderRadius: "100px",
                    marginTop: "20px",
                    fontWeight: "bold"
                  }}
                  color="primary"
                  variant="contained"
                >
                  Get started
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                Have and account?&nbsp;&nbsp;<a href="#">Login</a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
