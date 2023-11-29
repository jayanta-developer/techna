import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { sBitIcon } from "../../Assets/Data"



import "./style.css"

//component
import NavBar from '../../Components/NavBar'

export default function Spot() {
  const [sideTab, setSideTab] = useState(1)
  console.log(sideTab);

  return (
    <>
      <NavBar />
      <Box className="spotContainer">

        <Box className="spotFBox">


          <Box className="spotSideMenu">
            {/* side menu */}
            <Box className="spotNavMenu">
              <Box onClick={() => setSideTab(1)} sx={{ background: sideTab === 1 ? "#41f8f8" : "#18141c" }} className="sideBoxMenu market">
                <Typography>Market</Typography>
              </Box>
              <Box onClick={() => setSideTab(2)} sx={{ background: sideTab === 2 ? "#41f8f8" : "#18141c" }} className="sideBoxMenu limit">
                <Typography>Limit</Typography>
              </Box>
              <Box onClick={() => setSideTab(3)} sx={{ background: sideTab === 3 ? "#41f8f8" : "#18141c" }} className="sideBoxMenu SMarket">
                <Typography>Stop Market</Typography>
              </Box>
            </Box>

            {/* tabe section */}
            <Box className="tabeinnerSection market">
              <Typography className='sideMenuGText'>Pay</Typography>
              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}

                </Box>

                <Box className="usdTBox">
                  <Box><Typography>25</Typography></Box>
                  <Box><Typography>155</Typography></Box>
                </Box>
              </Box>


            </Box>




          </Box>





          <Box className="spotGraphBox"></Box>
        </Box>

        {/* Table */}
        <Box className="spotOderBox">
          <Box className="spotLBoxHeader">
            <Typography className='spotTabelHeaderText'>Open Orders</Typography>
            <Box className="oderDropBox">
              <Typography>Open Orders</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
          <Box className="spotLBoxTable">

          </Box>

        </Box>

      </Box>
    </>
  )
}
