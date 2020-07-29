import React from "react";
import {
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "./MyNavbar.css";

const useStyles = makeStyles({
  paper: {
    background: 'rgba(87, 69, 69, 0.5)',
    color: 'white'
  }
});
function MyNavbar() {
  const styles = useStyles();

  return (
    <div>
      <Drawer anchor="left" variant="permanent" classes={{paper:styles.paper}}>
        <Divider />
        <List>
          {["Home Page", "Overview"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <div className="listtext">{text}</div>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <div className="listtext">My projects:</div>
          </ListItem>
          {[
            "Book lover forum",
            "Keiko corp",
            "Brainstorm",
            "Portfolio website",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <div className="listtext">{text}</div>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <div className="listtext">Contact Information:</div>
          </ListItem>
          {["Github", "LinkedIn", "Email"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <div className="listtext">{text}</div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default MyNavbar;
