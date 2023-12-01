import React, { useState } from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DateRangeIcon from '@mui/icons-material/DateRange';


//components
import NavBar from '../../Components/NavBar';
import { LineChart } from "../../Components/LineChart"
import CandlestickChart from "../../Components/TradingChart"
import { sBitIcon, redTriangle, I_icon } from "../../Assets/Data"

const callCard = () => {
  return (
    <Box className="callCard">
      <Typography className='callCardHeader_text'>Call 06/28</Typography>
      <Box className="callBtcBox">
        {sBitIcon}
        <Typography ml={1}>Buy BTC : $31,000</Typography>
      </Box>
      <Box className="btcM_text_b callBtcBoxText">
        <Typography>Estimated Pml %</Typography>
        <Typography>Win Rate</Typography>
        <Typography>Break Even Price</Typography>
      </Box>
      <Box className="btcM_text_b">
        <Typography className='callCGText'>1.042%</Typography>
        <Typography className='callCRedText'>Medium</Typography>
        <Typography className='callCWText'>$31,000</Typography>
      </Box>
      <Box className="callCardBtnBox">
        <Box className="buyBtn">
          <Typography>Buy</Typography>
        </Box>
      </Box>
    </Box>
  )
}


export default function OptionsBeginners() {
  const [graphBtn, setGraphBtn] = useState(true)

  return (
    <>
      <NavBar />
      <Box className="OptionsBeginners">
        <Box className="OBUsdBox">

          <Box className="dropTab">
            <Typography>BTC/USDT</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>
          <Box className="GTPTabeItem">
            <Typography>Price</Typography>
            <Typography>$70,000</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>24 Change</Typography>
            <Typography>+578%</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>Volume</Typography>
            <Typography>44k BTC</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>24 High</Typography>
            <Typography>$71, 775</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>24 Low</Typography>
            <Typography>$69, 755</Typography>
          </Box>


        </Box>


        <Box className="BTCGraphBox">
          <Box className="btcGHeader">
            <Box className="dropTab">
              <Typography>BTC/USDT</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </Box>
            <Box className="btcGCenterHeader">
              <Box>
                {sBitIcon}
                <Typography ml={1} className='btc_header_P_text'>BTC Price</Typography>
              </Box>
              <Typography className='btcGCenterHeader_2Text'>$30,00</Typography>
              <Box>
                {redTriangle}
                <Typography ml={1} className='btc_Header_3Text'>30.922.9</Typography>
              </Box>
            </Box>
            <Box className="btc_header_btnBox">
              <Box sx={{ background: "#61FF71" }} className="SABbtn">
                <Typography>Buy/Long</Typography>
              </Box>
              <Box sx={{ background: "#F44336" }} className="SABbtn">
                <Typography>Sell/Short</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="CandlCartBox">
            <CandlestickChart />
          </Box>
        </Box>



        <Box className="callandGrapghBox">
          <Box className="callBox">
            <Box className="callHeader">
              <Box>
                <Typography mr={1}>Buy A Call</Typography>{I_icon}
              </Box>
              <Box>
                <Box className="dropTab">
                  <Typography>BTC/USDT</Typography>
                  <DateRangeIcon sx={{ color: "#fff" }} />
                </Box>
                {/* <DatePicker defaultValue={dayjs('2022-04-17')} /> */}
              </Box>
            </Box>
            <Box className="callCardBox">
              {callCard()}
              {callCard()}
              {callCard()}
              {callCard()}

            </Box>
          </Box>
          <Box className="braph_Box">
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
          </Box>
        </Box>
      </Box>
    </>
  )
}
