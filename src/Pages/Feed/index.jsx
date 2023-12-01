import React from "react";
import "./style.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//icons
import AddIcon from "@mui/icons-material/Add";

//images
import Logo from "../../Assets/img/logo.png";
import avatar from "../../Assets/img/avatar.png";
import avatargroup from "../../Assets/img/avatar-group.png";
import iconhome from "../../Assets/img/icon-home.svg";
import iconrules from "../../Assets/img/icon-rules.svg";
import iconevents from "../../Assets/img/icon-events.svg";
import iconclasses from "../../Assets/img/icon-classes.svg";
import iconcompetitions from "../../Assets/img/icon-competitions.svg";
import iconfaq from "../../Assets/img/icon-faq.svg";
import iconlinks from "../../Assets/img/icon-links.svg";
import iconsettings from "../../Assets/img/icon-settings.svg";
import iconcheckbox from "../../Assets/img/checkbox.png";

//components
import SideFloatingBar from "../../Components/SideFloatingBar";

export default function Feed() {
  return (
    <>
      <section className="profile-section">
        <SideFloatingBar />
        <div className="profile-sidebar">
          <div className="avatar">
            <a href="#">
              <img src={avatar} alt="" />
            </a>
          </div>
          <div className="designation">
            Direct <span className="badge">+1</span>
          </div>
          <hr />
          <div className="grey-box">
            <a href="#">Pirates</a>
          </div>
          <div className="grey-box">
            <a href="#">Group 2</a>
          </div>
          <div className="grey-box">
            <a href="#">Group 3</a>
          </div>
          <div className="grey-box">
            <a href="#">Group 4</a>
          </div>
          <div className="grey-box">
            <a href="#">
              <AddIcon />
            </a>
          </div>
        </div>
        <div className="profile-menu">
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconhome} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconrules} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Rules" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconevents} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconclasses} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Classes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconcompetitions} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Competitions" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconfaq} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconlinks} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconsettings} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </div>
        <div className="profile-content">
          <div className="heading">
            <div className="left">
              <h2>Pirates of Crypto</h2>
              <h6>
                <img src={iconcheckbox} alt="" /> 365k Follower
              </h6>
            </div>
            <img src={avatargroup} alt="" />
          </div>
          <div className="post-box">
            <div className="avatar"><img src={avatar} alt="" /></div>
            <div className="form"><textarea name="" id="" cols="30" rows="10" placeholder="What’s on your mind?"></textarea><input type="submit" value="POST" /></div>
          </div>
          <div className="comment-box"></div>
          <div className="comment-box"></div>
        </div>
      </section>
    </>
  );
}
