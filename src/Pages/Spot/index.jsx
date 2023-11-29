import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { sBitIcon } from "../../Assets/Data"

import "./style.css"

//images
import refreshLogo from "../../Assets/Images/image 124.png.svg"

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

            {/* tabe  marketSection */}
            <Box sx={{ display: sideTab === 1 ? "flex" : "none" }} className="tabeinnerSection marketSection">
              <Typography className='sideMenuGText'>Pay</Typography>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>USDT</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox">
                  <Box><Typography>25</Typography></Box>
                  <Box><Typography>155</Typography></Box>
                </Box>
              </Box>

              <Box className="usdTHeaderValue">
                <Box className="usdTHeaderValueItem">
                  <Typography>25</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>50</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>75</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>MAX</Typography>
                </Box>
                <Box className="usdTHeaderValueItem customBtn">
                  <Typography>Custom</Typography>
                </Box>
              </Box>

              <Box className="placeholderRefres_box">
                <img src={refreshLogo} />
              </Box>
              <Typography className='sideMenuGText'>Receive</Typography>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>USDT</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox RusdTBox">
                  <Typography>27.8377</Typography>
                </Box>
              </Box>
              <Box className="buyBtn">
                <Typography>Buy</Typography>
              </Box>
            </Box>






















            {/*Table  LimitSection */}
            <Box sx={{ display: sideTab === 2 ? "flex" : "none" }} className="tabeinnerSection">
              <Typography className='sideMenuGText'>Paid token</Typography>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>MATIC</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox">
                  <Box><Typography>1.45</Typography></Box>
                  <Box><Typography>25$</Typography></Box>
                </Box>
              </Box>

              <Box className="usdTHeaderValue">
                <Box className="usdTHeaderValueItem">
                  <Typography>25</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>50</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>75</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>MAX</Typography>
                </Box>
                <Box className="usdTHeaderValueItem customBtn">
                  <Typography>Custom</Typography>
                </Box>
              </Box>

              <Typography className='sideMenuGText'>Expiry</Typography>
              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  <Typography>1 hour</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox">
                  <Box><Typography>1.45</Typography></Box>
                  <Box><Typography>25$</Typography></Box>
                </Box>
              </Box>

              <Box className="placeholderRefres_box">
                <img src={refreshLogo} />
              </Box>
              <Typography className='sideMenuGText'>You Get</Typography>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>BTC</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox RusdTBox">
                  <Typography>27.8377</Typography>
                </Box>
              </Box>
              <Box className="buyBtn">
                <Typography>Buy</Typography>
              </Box>
            </Box>

















            {/*Table  StopMarketSection */}
            <Box sx={{ display: sideTab === 3 ? "flex" : "none" }} className="tabeinnerSection">
              <Typography className='sideMenuGText'>Pay</Typography>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>USDT</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox">
                  <Box><Typography>25</Typography></Box>
                  <Box><Typography>155</Typography></Box>
                </Box>
              </Box>

              <Box className="usdTHeaderValue">
                <Box className="usdTHeaderValueItem">
                  <Typography>25</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>50</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>75</Typography>
                </Box>
                <Box className="usdTHeaderValueItem">
                  <Typography>MAX</Typography>
                </Box>
                <Box className="usdTHeaderValueItem customBtn">
                  <Typography>Custom</Typography>
                </Box>
              </Box>

              <Box className="placeholderRefres_box">
                <img src={refreshLogo} />
              </Box>
              <Typography className='sideMenuGText'>Receive</Typography>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>USDT</Typography>
                  <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox RusdTBox">
                  <Typography>27.8377</Typography>
                </Box>
              </Box>
              <Box className="buyBtn">
                <Typography>Buy</Typography>
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
