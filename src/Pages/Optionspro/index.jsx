import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { sBitIcon, sWhiteBitIcon } from "../../Assets/Data"


import "./style.css"

//components
import NavBar from '../../Components/NavBar';
import { LineChart } from "../../Components/LineChart"

export default function Optiospro() {
  const [graphBtn, setGraphBtn] = useState(true)
  const [sideTab, setSideTab] = useState(1)



  const optHeaderRow = () => {
    return (
      <Box className="optRow">
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Size</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>IV (Bid)</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Bid</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Mark</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Ask</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>IV (Ask)</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Open</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Δ|Delta</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Position</Typography>
        </Box>
      </Box>
    )
  }


  const optRow = (val) => {
    return (
      <Box className="optRow">
        <Box className="optrowItem">
          <Typography sx={{ color: val ? "#61FF71" : "#FF7D61" }} className='potT_RedText'>3.9</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>--</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>0.1190</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_headerText'>0.1260</Typography>
          <Typography className='potT_whiteText'>$3302.53</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_headerText'>0.1260</Typography>
          <Typography className='potT_whiteText'>$3302.53</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>211.3%</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>--</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>1.00</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>--</Typography>
        </Box>
      </Box>

    )
  }

  const optLastTabHeaderRow = () => {
    return (
      <Box className="optRow">
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Symbol</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Call / Put</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Value</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Amount</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Strike Date</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Strike Price</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>P & L</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Close Position</Typography>
        </Box>
      </Box>
    )
  }

  const optLastTabRow = () => {
    return (
      <Box className="optRow">
        <Box sx={{ flexDirection: "row", justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          {sWhiteBitIcon}
          <Typography ml={1} className='potT_LheaderText'>BTC</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>Call</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>$-29000</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>2</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>18/7</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>35000</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>+160(+2.5%)</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Market Limit</Typography>
          <Typography className='potT_LheaderText'>$29000</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <NavBar />
      <Box className="optiospro">
        <Box className="spotGraphBox innerGraphBox">
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
        <Box className="optTableBox">
          <Box className="optFTb">
            {optHeaderRow()}
            {optRow()}
            {optRow()}
            {optRow()}
            {optRow()}
            {optRow()}
          </Box>
          <Box className="optMTb">
            <Box className="optMRowItem">
              <Typography>Strike</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>

          </Box>
          <Box className="optLTb">
            {optHeaderRow()}
            {optRow(true)}
            {optRow(true)}
            {optRow(true)}
            {optRow(true)}
            {optRow(true)}
          </Box>
        </Box>

        <Box className="optBottomBox">
          <Box className="optBotFBox">
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

            <Box sx={{ justifyContent: 'space-between' }} className="tabsectionLabel">
              <Typography className='sideMenuGText gptLCText'> Amount</Typography>
              <Typography className='sideMenuGText gptLCText'>Trigger price</Typography>
              <Typography className='sideMenuGText gptLCText'>Price</Typography>
            </Box>
            <Box className="usdTHeader">
              <Box sx={{ justifyContent: "space-between" }} pr={2} className="usdSelectorBox">
                <Typography>12</Typography>
                <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
              </Box>
              <Box className="usdSelectorBox">
                {sBitIcon}
                <Typography>BTC</Typography>
                <KeyboardArrowDownIcon className='dwonArrow' sx={{ color: "#fff" }} />
              </Box>
              <Box sx={{ justifyContent: "space-between" }} pr={2} className="usdSelectorBox">
                <Typography>25</Typography>
              </Box>
            </Box>
            <Box className="sellAbuyBtnBox">
              <Box sx={{ background: "#61FF71" }} className="SABbtn">
                <Typography>Buy/Long</Typography>
              </Box>
              <Box sx={{ background: "#F44336" }} className="SABbtn">
                <Typography>Sell/Short</Typography>
              </Box>
            </Box>
            <Box className="optCUstTextBox">
              <Box className="optCUstTextItemBox">
                <Typography>Position Base</Typography>
              </Box>
              <Box className="optCUstTextItemBox">
                <Typography>Remaining Balance</Typography>
              </Box>
              <Box className="optCUstTextItemBox">
                <Typography>Fee</Typography>
              </Box>
            </Box>
            <Box className="optCUstText_Box">
              <Box className="optCUstTextItemBox"> <Typography sx={{ color: "#50cd89" }}>300 USDT</Typography></Box>
              <Box className="optCUstTextItemBox"><Typography sx={{ color: "#50cd89" }}>20 USDT</Typography></Box>
              <Box className="optCUstTextItemBox"><Typography sx={{ color: "#FFFFFF" }}>0.2 USDT</Typography></Box>
            </Box>
          </Box>

          <Box className="optBotLBox">
            {optLastTabHeaderRow()}
            {optLastTabRow()}
            {optLastTabRow()}
            {optLastTabRow()}
            {optLastTabRow()}
          </Box>
        </Box>
      </Box>
    </>
  )
}
