import React from "react";
import { Divider, List, ListItem, ListItemIcon } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <div>
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
        {["Book lover forum", "Keiko corp", "Brainstorm","Portfolio website"].map((text, index) => (
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
        {["Github","LinkedIn","Email"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <div className="listtext">{text}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MyNavbar;
