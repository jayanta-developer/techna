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
import avatargroup from "../../Assets/img/avatar-group2.png";
import avatar from "../../Assets/img/bitcoin.png";
import iconhome from "../../Assets/img/icon-home.svg";
import iconrules from "../../Assets/img/icon-rules.svg";
import iconevents from "../../Assets/img/icon-events.svg";
import iconclasses from "../../Assets/img/icon-classes.svg";
import iconcompetitions from "../../Assets/img/icon-competitions.svg";
import iconfaq from "../../Assets/img/icon-faq.svg";
import iconlinks from "../../Assets/img/icon-links.svg";
import iconsettings from "../../Assets/img/icon-settings.svg";
import dp from "../../Assets/img/avatar.jpg";
import iconconnect from "../../Assets/img/icon-connect.svg";

//components
import SideFloatingBar from "../../Components/SideFloatingBar";

export default function Profile() {
  return (
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
        <div className="profile-details">
          <div className="dp-nm-lv-dt">
            <div className="profile-dp"><img src={dp} alt="" /></div>
            <div className="profile-nm">
              <h2>Brad Dennis</h2>
              <ul>
                <li><button className="btn-follow">Follow</button></li>
                <li><button className="btn-message">Message</button></li>
                <li><button className="btn-boost">Boost</button></li>
              </ul>
            </div>
            <div className="profile-lv">
              <ul>
                <li><img src={iconconnect} alt="" /></li>
                <li><span>Level 6</span></li>
              </ul>
              <p>Created Date: 2 May 2023</p>
            </div>
          </div>
          <div className="fo-bo-id-st">
            <ul>
              <li><a href="#"><strong>10</strong>Followers</a></li>
              <li><a href="#"><strong>5</strong>Boosts</a></li>
              <li><a href="#"><strong>5</strong>Ideas</a></li>
              <li><a href="#"><strong>0</strong>Strategies</a></li>
            </ul>
          </div>
          <div className="id-st-fo-fo">
            <ul>
              <li><a href="#" className="select">Ideas</a></li>
              <li><a href="#">Strategies</a></li>
              <li><a href="#">Followers</a></li>
              <li><a href="#">Following</a></li>
            </ul>
          </div>
        </div>
        <div className="profile-boxes">
          <div className="box">
            <h3>Top 10 indicators</h3>
            <p>
              Organize your thoughts with an outline. Here’s the outlining
              strategy I use. I promise it works like a charm. Not only will it
              make writing your blog post easier, it’ll help you make your
              message focused and clear
            </p>
            <img src={avatargroup} alt="" />
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={avatar} alt="" />
            <h3>Bitcoin Prize Predections</h3>
            <p>
              Organize your thoughts with an outline. Here’s the outlining
              strategy I use. I promise it works like a charm. Not only will it
              make writing your blog post easier, it’ll help you make your
              message focused and clear
            </p>
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <h3>Top 5 Tokens</h3>
            <p>
              Organize your thoughts with an outline. Here’s the outlining
              strategy I use. I promise it works like a charm. Not only will it
              make writing your blog post easier, it’ll help you make your
              message focused and clear
            </p>
            <img src={avatargroup} alt="" />
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <img src={avatar} alt="" />
            <h3>Bitcoin Prize Predections</h3>
            <p>
              Organize your thoughts with an outline. Here’s the outlining
              strategy I use. I promise it works like a charm. Not only will it
              make writing your blog post easier, it’ll help you make your
              message focused and clear
            </p>
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <h3>Top 10 indicators</h3>
            <p>
              Organize your thoughts with an outline. Here’s the outlining
              strategy I use. I promise it works like a charm. Not only will it
              make writing your blog post easier, it’ll help you make your
              message focused and clear
            </p>
            <img src={avatargroup} alt="" />
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="box">
            <h3>Top 5 Tokens</h3>
            <p>
              Organize your thoughts with an outline. Here’s the outlining
              strategy I use. I promise it works like a charm. Not only will it
              make writing your blog post easier, it’ll help you make your
              message focused and clear
            </p>
            <img src={avatargroup} alt="" />
            <div className="read-more">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
