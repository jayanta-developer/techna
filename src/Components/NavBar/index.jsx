import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import "./style.css"

import { NavIcon, BitIcon } from "../../Assets/Data"


//images
import Logo from "../../Assets/img/logo.png"


export default function NavBar() {
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(false)


  return (
    <>
      <Box className="navBar">
        <Box onClick={() => navigate("/")} className="logoBox">
          {NavIcon}
          <Typography>TechNa</Typography>
        </Box>
        <Box className="MenuBox">
          <Box onClick={() => navigate("/spot")} className="navMenuItem">
            <Typography>Spot</Typography>
            {/* <KeyboardArrowDownIcon sx={{ color: "#fff" }} /> */}
          </Box>
          <Box onClick={() => navigate("/stakeandtake")} className="navMenuItem">
            <Typography>S&T</Typography>
            {/* <KeyboardArrowDownIcon sx={{ color: "#fff" }} /> */}
          </Box>
          <Box onClick={() => navigate("/futures")} className="navMenuItem">
            <Typography>Futures</Typography>
            {/* <KeyboardArrowDownIcon sx={{ color: "#fff" }} /> */}
          </Box>
          <Box onClick={() => navigate("/optionsbeginners")} className="navMenuItem">
            <Typography>Options Beginners</Typography>
            {/* <KeyboardArrowDownIcon sx={{ color: "#fff" }} /> */}
          </Box>
          <Box onClick={() => navigate("/optionspro")} className="navMenuItem">
            <Typography>Options Pro</Typography>
            {/* <KeyboardArrowDownIcon sx={{ color: "#fff" }} /> */}
          </Box>
          <Box onClick={() => navigate("/feed")} className="navMenuItem">
            <Typography>Feed</Typography>
            {/* <KeyboardArrowDownIcon sx={{ color: "#fff" }} /> */}
          </Box>
        </Box>
        <Box className="currencyBox">
          <Box>{BitIcon}</Box>
          <Box>
            <Typography className='bitCountText'>$ 2.71 M</Typography>
            <Typography className='btcText'>~94.58 BTC  </Typography>
          </Box>
        </Box>
        <DensityMediumIcon onClick={() => setSideMenu(true)} className='hamMenu' />
        {/* side menu */}
        <Box sx={{ width: sideMenu ? "100%" : "0px" }} className="sideMune">
          <CloseIcon onClick={() => setSideMenu(false)} className='sideMenuCross' />
          <Box className="sideInnerBox">
            <Box onClick={() => navigate("/")} className="logoBox">
              {NavIcon}
              <Typography>TechNa</Typography>
            </Box>
            <Box className="sideMenuItemRow">
              <Typography>Spot</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
            <Box className="sideMenuItemRow">
              <Typography>S&T</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
            <Box className="sideMenuItemRow">
              <Typography>Futures</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
            <Box className="sideMenuItemRow">
              <Typography>Options Beginners</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
            <Box className="sideMenuItemRow">
              <Typography>Options Pro</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
