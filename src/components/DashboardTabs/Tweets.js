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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "black",
    color: "red",
    padding: "10px"
  }
}));

export default function Tweets() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={2}
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Avatar className={classes.avatar}>
            <h2>V</h2>
          </Avatar>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              margin: "0px"
            }}
          >
            Verizon
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
            alignItems: "center"
          }}
        >
          @verizon · 3 Apr
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
            Thanks{" "}
            <img
              src="/highfive.png"
              style={{ width: "30px", height: "30px" }}
            />{" "}
            everyone who tuned in to catch{" "}
            <u style={{ color: "#1eabe8" }}>@RyanTedder</u> of{" "}
            <u style={{ color: "#1eabe8" }}>@OneRepublic</u> show his support
            for small businesses on #PayItForwardLIVE. ICYMI here’s what
            happened!
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
                padding: "10px 0px"
              }}
            >
              Be sure to tune in every Thursday at 8pm ET/5pm PT for more acts
              like this!
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={9}>
            <Card style={{ borderRadius: "20px" }}>
              <video
                controls
                autoPlay
                style={{ width: "100%" }}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
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
              <span>{12}</span>
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <RepeatIcon />
              <span>{59}</span>
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <FavoriteBorderIcon />
              <span>{168}</span>
            </IconButton>
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
}
