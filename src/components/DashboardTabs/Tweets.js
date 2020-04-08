import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "black",
    color: "red",
    padding: "10px",
  },
  attributeCount: {
    display: "inline-block",
  },
}));

function Tweets(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(props.tweetsData);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      {props.tweetsData.map((tweet, index) => {
        return (
          <Card key={index} className={classes.root}>
            <Grid container>
              <Grid
                item
                xs={2}
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar className={classes.avatar}>
                  <h2>{tweet.postedBy[0]}</h2>
                </Avatar>
              </Grid>
              <Grid
                item
                xs={2}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "0px",
                  }}
                >
                  {tweet.postedBy}
                  <CloudDoneIcon
                    fontSize="medium"
                    style={{ color: "#1eabe8", marginLeft: "10px" }}
                  />
                </p>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {`@verizon · ${tweet.posted}`}
              </Grid>
              <Grid item xs={5} style={{ textAlign: "end", padding: "15px" }}>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
            <CardContent>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  {/* Thanks{" "}
              <img
                src="/highfive.png"
                style={{ width: "30px", height: "30px" }}
              />{" "}
              everyone who tuned in to catch{" "}
              <u style={{ color: "#1eabe8" }}>@RyanTedder</u> of{" "}
              <u style={{ color: "#1eabe8" }}>@OneRepublic</u> show his support
              for small businesses on #PayItForwardLIVE. ICYMI here’s what
              happened! */}
                  {tweet.message}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginTop: "20px",
                      padding: "10px 0px",
                    }}
                  >
                    Be sure to tune in every Thursday at 8pm ET/5pm PT for more
                    acts like this!
                  </div>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Card style={{ borderRadius: "20px" }}>
                    {tweet.videoURL && (
                      <video
                        controls
                        autoPlay={false}
                        style={{ width: "100%" }}
                        src={tweet.videoURL}
                      />
                    )}
                    {tweet.imageURL && (
                      <img style={{ width: "100%" }} src={tweet.imageURL} />
                    )}

                    <div style={{ padding: "20px" }}>
                      <div>Verizon</div>
                      <div style={{ fontWeight: "bold" }}>
                        Verizon PayItForward LIVE
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <div className={classes.attributeCount}>
                    {tweet.commentsCount}
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <RepeatIcon />
                  </IconButton>
                  <div className={classes.attributeCount}>
                    {tweet.reTweetsCount}
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <div className={classes.attributeCount}>
                    {tweet.LikesCount}
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <PublishIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        );
      })}
    </React.Fragment>
  );
}

export default Tweets;
