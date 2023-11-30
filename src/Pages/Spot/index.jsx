import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { sBitIcon } from "../../Assets/Data"

import "./style.css"

//images
import refreshLogo from "../../Assets/Images/image 124.png.svg"

//component
import NavBar from '../../Components/NavBar'
import { LineChart } from "../../Components/LineChart"

export default function Spot() {
  const [sideTab, setSideTab] = useState(1)
  const [graphBtn, setGraphBtn] = useState(true)


  const tableRow = ({ Time, Pay, Receive, Amount, Type, TriggerPrice, Price, Expiry, Status }) => {
    return (
      <Box className="tableRow">
        <Box className="tableRowItem">
          <Typography>{Time}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Pay}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Receive}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Amount}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Type}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{TriggerPrice}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Price}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Expiry}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Status}</Typography>
        </Box>
      </Box>
    )
  }



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
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
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
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
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
              <Box className="tabsectionLabel">
                <Typography className='sideMenuGText'>Paid token</Typography>
                <Typography className='sideMenuGText sideMenuGTextL'>Paid token</Typography>
              </Box>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>MATIC</Typography>
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
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

              <Box className="tabsectionLabel">
                <Typography className='sideMenuGText'>Expiry</Typography>
                <Typography className='sideMenuGText sideMenuGTextL'>Price limit</Typography>
              </Box>
              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  <Typography>1 hour</Typography>
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
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
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
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
              <Box className="tabsectionLabel">
                <Typography className='sideMenuGText'>Paid token</Typography>
                <Typography className='sideMenuGText sideMenuGTextL SMsideMenuGTextL'>Amount</Typography>
              </Box>

              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  {sBitIcon}
                  <Typography>MATIC</Typography>
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox">
                  <Box><Typography>145</Typography></Box>
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


              <Box className="tabsectionLabel">
                <Typography className='sideMenuGText'>Trigger price</Typography>
                <Typography className='sideMenuGText sideMenuGTextL SMsideMenuGTextL'>Expiry</Typography>
              </Box>
              <Box className="usdTHeader">
                <Box className="usdSelectorBox">
                  <Typography>35,000</Typography>
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox RusdTBox">
                  <Typography>1 hour</Typography>
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
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
                  <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
                </Box>
                <Box className="usdTBox RusdTBox">
                  <Typography>27.8377</Typography>
                </Box>
              </Box>
              <Box className="buyBtn">
                <Typography>Create Order</Typography>
              </Box>
            </Box>
          </Box>




          <Box className="spotGraphBox">
            <Box className="graphBtnBox">

              <Box onClick={() => setGraphBtn(true)} sx={{ background: graphBtn ? "#41f8f8" : "#18141c" }} className="graphBtn lineBtn">
                <Typography sx={{ color: !graphBtn ? "#fff" : "#000" }}>Line</Typography>
              </Box>
              <Box onClick={() => setGraphBtn(false)} sx={{ background: !graphBtn ? "#41f8f8" : "#18141c" }} className="graphBtn jpnsBtn">
                <Typography sx={{ color: graphBtn ? "#fff" : "#000" }}>Japanese</Typography>
              </Box>

            </Box>

            <Box className="lineGraphBox">
              {
                graphBtn ?
                  <LineChart /> :
                  <Typography variant='h3' sx={{ color: "#fff" }}>On progress</Typography>
                // <CandlestickChart />
              }
            </Box>
          </Box>
        </Box>

        {/* Table */}
        <Box className="spotOderBox">
          <Box className="spotLBoxHeader">
            <Typography className='spotTabelHeaderText'>Open Orders</Typography>
            <Box className="oderDropBox">
              <Typography>Open Orders</Typography>
              <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
            </Box>
          </Box>
          <Box className="spotLBoxTable">
            {tableRow(
              {
                Time: "Time",
                Pay: "Pay",
                Receive: "Receive",
                Amount: "Amount",
                Type: "Type",
                TriggerPrice: "Trigger Price",
                Price: "Price",
                Expiry: "Expiry",
                Status: "Status"
              }
            )}
            {tableRow(
              {
                Time: "4.7.23.18.58",
                Pay: "USDT",
                Receive: "BTC",
                Amount: "2",
                Type: "Limit",
                TriggerPrice: "--",
                Price: "54",
                Expiry: "1 Day",
                Status: "2/0"
              }
            )}
            {tableRow(
              {
                Time: "4.7.23.18.58",
                Pay: "USDT",
                Receive: "BTC",
                Amount: "2",
                Type: "Limit",
                TriggerPrice: "--",
                Price: "54",
                Expiry: "1 Day",
                Status: "2/0"
              }
            )}
            {tableRow(
              {
                Time: "4.7.23.18.58",
                Pay: "USDT",
                Receive: "BTC",
                Amount: "2",
                Type: "Limit",
                TriggerPrice: "--",
                Price: "54",
                Expiry: "1 Day",
                Status: "2/0"
              }
            )}




          </Box>

        </Box>

      </Box>
    </>
  )
}
