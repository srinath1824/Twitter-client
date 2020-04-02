import React, { Component } from "react";
import { Grid, Button, Paper, Tabs, Tab } from "@material-ui/core";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import InsertLinkOutlinedIcon from "@material-ui/icons/InsertLinkOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import HomeRight from "./HomeRight";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: ""
    };
  }

  handleChange(event, value) {
    console.log(value);
    this.setState({ tabValue: value });
  }
  render() {
    return (
      <Grid container style={{ margin: "auto", width: "70%" }}>
        <Grid item xs={8} style={{ height: "250px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/twitter_dashboard.jpeg`}
            alt="Dashboard"
            style={{ width: "100%", height: "100%" }}
          />
          <Grid container style={{ margin: "auto", height: "6rem" }}>
            <Grid item xs={8}>
              <img
                src={`${process.env.PUBLIC_URL}/logo_dashboard.png`}
                alt="Dashboard"
                style={{
                  borderRadius: "50%",
                  width: "30%",
                  position: "relative",
                  top: "-50%",
                  left: "2rem",
                  border: "5px solid white"
                }}
              />
            </Grid>
            <Grid item xs={4} style={{ textAlign: "end" }}>
              <Button
                variant="outlined"
                color="primary"
                style={{
                  border: "2px solid #1eabe8",
                  borderRadius: "100px",
                  color: "#1eabe8",
                  fontWeight: "bold",
                  marginTop: "10px"
                }}
              >
                Follow
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} style={{ paddingLeft: "40px" }}>
              <p
                style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}
              >
                Verizon
                <CloudDoneIcon
                  fontSize="medium"
                  style={{ color: "#1eabe8", marginLeft: "10px" }}
                />
              </p>
              <h3 style={{ fontWeight: "lighter", margin: "0px" }}>@Verizon</h3>
              <p style={{ fontSize: "20px" }}>
                America’s most reliable network.
              </p>
              <Grid container>
                <Grid item xs={2}>
                  <LocationOnOutlinedIcon /> <span>USA</span>
                </Grid>
                <Grid item xs={4}>
                  <InsertLinkOutlinedIcon />
                  <span>
                    <a href="#" style={{ color: "#1eabe8" }}>
                      vz.to/coronavirus
                    </a>
                  </span>
                </Grid>
                <Grid item xs={4}>
                  <DateRangeOutlinedIcon />
                  <span>Joined July 2009</span>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <h3 style={{ display: "inline-block" }}>366</h3>
                  <h3
                    style={{
                      display: "inline-block",
                      fontWeight: "normal",
                      paddingLeft: "10px"
                    }}
                  >
                    Following
                  </h3>
                </Grid>
                <Grid item xs={3}>
                  <h3 style={{ display: "inline-block" }}>1.6M</h3>
                  <h3
                    style={{
                      display: "inline-block",
                      fontWeight: "normal",
                      paddingLeft: "10px"
                    }}
                  >
                    Followers
                  </h3>
                </Grid>
              </Grid>
            </Grid>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={this.state.tabValue}
              onChange={() => this.handleChange}
              centered
              // aria-label="disabled tabs example"
            >
              <Tab label="Tweets" value="Tweets" />
              <Tab label="Tweets & replies" value="Tweets & replies" />
              <Tab label="Media" value="Media" />
              <Tab label="Likes" value="Likes" />
            </Tabs>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <HomeRight />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
