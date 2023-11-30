import React, { useState } from 'react';
import { Box, Typography, Slider, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

import "./style.css"

//images
import refreshLogo from "../../Assets/Images/image 124.png.svg"

//component
import NavBar from '../../Components/NavBar'
import { LineChart } from "../../Components/LineChart"



export default function Futures() {
  const [sideTab, setSideTab] = useState(1)
  const [longChecked, setLongChecked] = useState(true);
  const [shortChecked, setShortChecked] = useState(false);
  const [gptTabe, setGptTabe] = useState(0)
  const [graphBtn, setGraphBtn] = useState(true)


  const handleLongChange = (event) => {
    setLongChecked(event.target.checked);
    setShortChecked(!event.target.checked);
  };

  const handleShortChange = (event) => {
    setShortChecked(event.target.checked);
    setLongChecked(!event.target.checked);
  };


  const tableRow = ({ textColor }) => {
    return (
      <Box className="orderTableRow">
        <Box className="orderTableRow_item">
          <Typography sx={{ color: textColor ? textColor : "#fff" }} className='tableRedText'>30.922.9</Typography>
        </Box>
        <Box className="orderTableRow_item">
          <Typography className='tableWhiteText'>0.01648529</Typography>
        </Box>
        <Box className="orderTableRow_item">
          <Typography className='tableWhiteText'>5.27456208</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <NavBar />
      <Box className="futuresContainer">
        <Box className="crossBox">
          <Box sx={{ width: "100px", marginBottom: "16px" }} className="navMenuItem">
            <Typography>Cross</Typography>
            <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
          </Box>

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
          {/* Amoutn */}
          {sideTab === 1 ? (
            <>
              <Typography className='sideMenuGText'>Amount</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox">
                  <Box><Typography>300 USDT </Typography></Box>
                  <Box><Typography>0.03 BTC </Typography></Box>
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
              <Typography className='sideMenuGText'>Leverage: X10</Typography>

              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

              <Box className="CheckBoxContainer">
                <FormGroup>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={longChecked} onChange={handleLongChange} color="default" />}
                      label="TP/SL of Long"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={shortChecked} onChange={handleShortChange} color="default" />}
                      label="TP/SL of Short"
                    />
                  </Box>
                </FormGroup>
              </Box>

              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Position Base: </Typography>
                <Typography>300 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Fees: </Typography>
                <Typography>0.2 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Remaining Balance: </Typography>
                <Typography>25 USDT</Typography>
              </Box>
            </>
          ) : sideTab === 2 ? (
            <>
              <Typography className='sideMenuGText'>Price</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox LPDrop">
                  <Box>
                    <Typography>Last</Typography>
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </Box>
                  <Typography>USDT</Typography>
                </Box>
              </Box>
              <Typography className='sideMenuGText'>Amount</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox">
                  <Box><Typography>300 USDT </Typography></Box>
                  <Box><Typography>0.03 BTC </Typography></Box>
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
              <Typography className='sideMenuGText'>Leverage: X10</Typography>

              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

              <Box className="CheckBoxContainer">
                <FormGroup>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={longChecked} onChange={handleLongChange} color="default" />}
                      label="TP/SL of Long"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={shortChecked} onChange={handleShortChange} color="default" />}
                      label="TP/SL of Short"
                    />
                  </Box>
                </FormGroup>
              </Box>

              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Position Base: </Typography>
                <Typography>300 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Fees: </Typography>
                <Typography>0.2 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Remaining Balance: </Typography>
                <Typography>25 USDT</Typography>
              </Box>
            </>
          ) : sideTab === 3 ? (
            <>
              <Typography className='sideMenuGText'>Trigger Price</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox LPDrop">
                  <Box>
                    <Typography>Last</Typography>
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </Box>
                  <Typography>USDT</Typography>
                </Box>
              </Box>
              <Typography className='sideMenuGText'>Price</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox LPDrop smField">
                  <Typography></Typography>
                  <Typography>USDT</Typography>
                </Box>
              </Box>
              <Typography className='sideMenuGText'>Amount</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox LPDrop smField">
                  <Typography>0.03</Typography>
                  <Typography>= 300 USDT</Typography>

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
              <Typography className='sideMenuGText'>Leverage: X10</Typography>

              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

              <Box className="CheckBoxContainer">
                <FormGroup>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={longChecked} onChange={handleLongChange} color="default" />}
                      label="TP/SL of Long"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={shortChecked} onChange={handleShortChange} color="default" />}
                      label="TP/SL of Short"
                    />
                  </Box>
                </FormGroup>
              </Box>

              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Position Base: </Typography>
                <Typography>300 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Fees: </Typography>
                <Typography>0.2 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Remaining Balance: </Typography>
                <Typography>25 USDT</Typography>
              </Box>
            </>
          ) : null}
        </Box>
        <Box className="orderBookBox">
          <Typography className='oderBookHeader'>Order Book</Typography>

          <Box className="orderTableRow">
            <Box className="orderTableRow_item">
              <Typography className='tableHeaderText'>Price (USDT)</Typography>
            </Box>
            <Box className="orderTableRow_item">
              <Typography className='tableHeaderText'>Amount(BTC)</Typography>
            </Box>
            <Box className="orderTableRow_item">
              <Typography className='tableHeaderText'>Total (BTC)</Typography>
            </Box>
          </Box>
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          <Box sx={{ background: "#18141C" }} className="orderTableRow">
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "50%" }} className="orderTableRow_item">
              <Typography className='totalUSDText'>30.922.9 <span className='totalUSDspanText'> = 30.922.9 USD</span></Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", width: "50%" }} className="orderTableRow_item">
              <Typography className='totalUSDspanText'>30,921.4</Typography>
              <Typography className='totalUSDText'>Mark Price</Typography>
            </Box>
          </Box>
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
        </Box>

        <Box className="graphBox">
          <Box className="graphTopPriceBox">
            <Box className="GTPTopBox">
              <Typography className='GTPTopHeader'>BTC/USDT</Typography>
              <Box className="GTPDropBox">
                <Typography className='GTPTopBtnText'>BTC/USDT</Typography>
                <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
              </Box>
            </Box>
            <Box className="GTPTabeBox">
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
                <Typography>44k  BTC</Typography>
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
          </Box>
          <Box className="gtpTabBox ">

            <Box onClick={() => setGptTabe(0)} sx={{ background: gptTabe === 0 ? "#18141c" : "#FFFFFF0D" }} className="gtpTabItem">
              <Typography>BTC/USDT</Typography>
              <CloseIcon className='gptTabCorsIcon' />
            </Box>
            <Box onClick={() => setGptTabe(1)} sx={{ background: gptTabe === 1 ? "#18141c" : "#FFFFFF0D" }} className="gtpTabItem">
              <Typography>ETH/USDT</Typography>
              <CloseIcon className='gptTabCorsIcon' />
            </Box>
            <Box onClick={() => setGptTabe(2)} sx={{ background: gptTabe === 2 ? "#18141c" : "#FFFFFF0D" }} className="gtpTabItem">
              <Typography>SOL/USDT</Typography>
              <CloseIcon className='gptTabCorsIcon' />
            </Box>
          </Box>

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

      </Box >


    </>
  )
}
