import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FaceTwoToneIcon from "@material-ui/icons/FaceTwoTone";
import VideocamTwoToneIcon from "@material-ui/icons/VideocamTwoTone";
import VideoCallTwoToneIcon from "@material-ui/icons/VideoCallTwoTone";
import DuoTwoToneIcon from "@material-ui/icons/DuoTwoTone";
import SlowMotionVideoTwoToneIcon from "@material-ui/icons/SlowMotionVideoTwoTone";
import MissedVideoCallTwoToneIcon from "@material-ui/icons/MissedVideoCallTwoTone";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='main mailbox folders'>
        <NavLink to='/profile'>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <FaceTwoToneIcon color='primary' style={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary='My Profile' />
          </ListItem>
        </NavLink>

        <NavLink to='/add'>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <VideocamTwoToneIcon color='primary' style={{ fontSize: 35 }} />{" "}
            </ListItemIcon>
            <ListItemText primary='Start Stream' />
          </ListItem>
        </NavLink>
        <NavLink to='/visualise'>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <VideoCallTwoToneIcon color='primary' style={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary='View Stream' />
          </ListItem>
        </NavLink>

        <Divider></Divider>

        <NavLink to='/ongoingstreams'>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <DuoTwoToneIcon color='primary' style={{ fontSize: 35 }} />
            </ListItemIcon>
            <ListItemText primary='Ongoing Streams' />
          </ListItem>
        </NavLink>

        <NavLink to='/otherplatform'>
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemIcon>
              <SlowMotionVideoTwoToneIcon
                color='primary'
                style={{ fontSize: 35 }}
              />{" "}
            </ListItemIcon>
            <ListItemText primary='Other Platforms' />
          </ListItem>
        </NavLink>
        <Link to='/createstream'>
          <ListItem
            button
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemIcon>
              <MissedVideoCallTwoToneIcon
                color='primary'
                style={{ fontSize: 35 }}
              />
            </ListItemIcon>
            <ListItemText primary='Create Stream' />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
