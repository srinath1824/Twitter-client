import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";

class HomeRight extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Card style={{ borderRadius: "20px" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              New to Twitter?
            </Typography>
            <Typography
              color="textSecondary"
              style={{ fontSize: "15px", marginTop: "20px" }}
            >
              Sign up now to get your own personalized timeline!
            </Typography>
          </CardContent>
          <CardActions style={{ padding: "20px" }}>
            <Button
              variant="contained"
              fullWidth={true}
              style={{
                border: "2px solid #1eabe8",
                backgroundColor: "#1eabe8",
                borderRadius: "100px",
                color: "white",
                fontWeight: "bold"
              }}
            >
              Sign up
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default HomeRight;
