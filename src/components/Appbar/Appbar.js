import React from "react";
import {
  makeStyles,
  useScrollTrigger,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import MyContent from "../MyContent/MyContent";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "rgba(87, 69, 69, 0.5)",
    color: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  button: {
    margin: 10,
    color: "white",
    borderColor: "white",
    fontSize: 15,
    fontStyle: "bold",
  },
  icon: {
    color: "white",
  },
}));

function Appbar(props) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={styles.appbar}>
          <Toolbar className={styles.toolbar}>
            <div>
              <Button className={styles.button}>Home Page</Button>
              <Button className={styles.button}>My Projects</Button>
            </div>
            <div className="contacts">
              <IconButton
                className={styles.icon}
                href="https://www.linkedin.com/in/chaoyi-liu-a8a3b4149/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                className={styles.icon}
                href="https://github.com/estherliu"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                className={styles.icon}
                href="mailto:chaoyi97@gmail.com"
              >
                <EmailIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Toolbar />
      <Container>
        <Box my={2}>
          <MyContent />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Appbar;
