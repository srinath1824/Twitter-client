import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { connect } from "react-redux";
import actionTypes from "../actions";
import { SERVER_URL, LOGIN_ERROR_MESSAGE } from "../constants";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    let request = {
      username: this.state.username,
      password: this.state.password
    };
    let errorElement = document.getElementById("error_msg");
    axios
      .post(`${SERVER_URL}/auth`, request)
      .then(res => {
        console.log("RESPONSE", res);
        if (res.data["x-auth-token"].length > 0) {
          localStorage.setItem("x-auth-token", res.data["x-auth-token"]);
          this.props.authenticate(true);
        } else {
          errorElement.style.display = "block";
          errorElement.innerHTML = LOGIN_ERROR_MESSAGE;
        }
      })
      .catch(err => {
        console.log("Error in authentication", err);
        errorElement.style.display = "block";
        errorElement.style.color = "red";
        errorElement.innerHTML = LOGIN_ERROR_MESSAGE;
      });
  }

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
            <p id="error_msg" style={{ display: "none" }}></p>
            <TextField
              label="Phone or email"
              variant="outlined"
              name="username"
              fullWidth={true}
              onChange={e => this.handleChange(e)}
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              fullWidth={true}
              style={{ marginTop: "20px" }}
              onChange={e => this.handleChange(e)}
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
                  onClick={() => this.handleSubmit()}
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

function mapDispatchToProps(dispatch) {
  return {
    authenticate: data => dispatch({ type: actionTypes.AUTH_LOGIN, data })
  };
}

export default connect(null, mapDispatchToProps)(Login);
