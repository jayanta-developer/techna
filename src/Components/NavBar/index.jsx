import React from 'react'
import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./style.css"

import { NavIcon, BitIcon } from "../../Assets/Data"


export default function NavBar() {

  return (
    <>
      <Box className="navBar">
        <Box className="logoBox">
          {NavIcon}
          <Typography>TechNa</Typography>
        </Box>

        <Box className="MenuBox">

          <Box className="navMenuItem">
            <Typography>Spot</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>
          <Box className="navMenuItem">
            <Typography>S&T</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>
          <Box className="navMenuItem">
            <Typography>Futures</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>
          <Box className="navMenuItem">
            <Typography>Options Beginners</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>
          <Box className="navMenuItem">
            <Typography>Options Pro</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>


        </Box>
        <Box className="currencyBox">
          <Box>{BitIcon}</Box>
          <Box>
            <Typography className='bitCountText'>$ 2.71 M</Typography>
            <Typography className='btcText'>~94.58 BTC  </Typography>
          </Box>



        </Box>
      </Box>
    </>
  )
}
