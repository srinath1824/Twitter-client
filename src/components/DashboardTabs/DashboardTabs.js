import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tweets from "./Tweets";
import axios from "axios";
import { SERVER_URL } from "../constants";
import Skeleton from "@material-ui/lab/Skeleton";
import { connect } from "react-redux";
import actionTypes from "../actions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginTop: "20px",
  },
}));

function DashboardTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { tweets, setTweetsData } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(async () => {
    let token = sessionStorage.getItem("x-auth-token");
    console.log("token", token);
    //axios.defaults.headers.common["x-auth-token"] = token;
    await axios
      .post(`${SERVER_URL}/posts/tweets`, { "x-auth-token": token })
      .then((res) => {
        setTweetsData(res.data);
      })
      .catch((err) => {
        console.log("ERROR in fetching tweets data", err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Tweets" {...a11yProps(0)} />
        <Tab label="Tweets & replies" {...a11yProps(1)} />
        <Tab label="Media" {...a11yProps(2)} />
        <Tab label="Likes" {...a11yProps(3)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {tweets.length > 0 ? (
            <Tweets tweetsData={tweets} />
          ) : (
            <div>
              <div>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton
                  animation="wave"
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              </div>
              <Skeleton variant="rect" width="80%" height={300} />
            </div>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tweets: state.dashboard.tweets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTweetsData: (data) =>
      dispatch({ type: actionTypes.SET_DASHBOARD_TWEETS, data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTabs);
