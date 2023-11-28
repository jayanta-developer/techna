import React from 'react';
import { Box } from '@mui/material';
// import "./style.css"
// import "./mCustomScrollbar.css"
// import "./custom.css"
// import "./bootstrap.min.css"

//components
import NavBar from '../../Components/NavBar';

//images
import bitcoinLogo from "../../Assets/img/bitcoin logo.png"


export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Box className="homeContainer">
        <div class="tn_sid_bar_totset">
          <div class="tn_right_sid_bar">
            <i class="fab fa-bitcoin tn_right_sid_bar_i" data-navn="t1"></i>
            <i class="fas fa-volume tn_right_sid_bar_i" data-navn="t2"></i>
            <i class="fas fa-presentation-screen tn_right_sid_bar_i" data-navn="t3"></i>
            <i class="fas fa-chart-line-up tn_right_sid_bar_i" data-navn="t4"></i>
            <i class="fas fa-droplet tn_right_sid_bar_i" data-navn="t5"></i>
            <i class="fas fa-messages-question tn_right_sid_bar_i" data-navn="t6"></i>
          </div>
          <div class="tn_right_sid_bar_tab " data-navn="t1">
            <div class="tn_right_sid_bar_tab_innn">
              <div class="tn_right_sid_bar_tab_hd">Chat
                <i class="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
              </div>
              <div class="tn_rs_chatbox mCustomScrollbar" data-mcs-theme="minimal">
                <div class="tn_rs_chatbox_in">
                  <div class="tn_rs_chatbox_chatting_out">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div class="tn_rs_chatbox_chatting_out">
                    <div class="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div class="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="tn_rs_chatbox_input">
                <a href="#">
                  <i class="tn_rs_chatbox_input_in_ico fas fa-paper-plane-top"></i>
                </a>
                <input type="text" placeholder="Type here" class="tn_rs_chatbox_input_in" />
              </div>
            </div>
          </div>
          <div class="tn_right_sid_bar_tab" data-navn="t2">
            <div class="tn_right_sid_bar_tab_hd">Liqutation
              <i class="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
            </div>
            <div class="tn_rs_ld_set_scrl mCustomScrollbar" data-mcs-theme="minimal">
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="row">
                  <div class="col-auto">
                    <img src={bitcoinLogo} class="tn_rs_ld_ico" />
                  </div>
                  <div class="col">
                    <div class="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                    <div class="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>









          <div class="tn_right_sid_bar_tab " data-navn="t3">
            <div class="tn_right_sid_bar_tab_hd mb-0">
              <i class="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
            </div>
            <select class="tn_rs_chs_select">
              <option value="0">Choose Token</option>
              <option value="0">BTC</option>
              <option value="0">ETH</option>
            </select>
            <div class="row g-2 srk_mb_1">
              <div class="col-4"> <div class="tn_rs_chs_txt">SYMBOL</div></div>
              <div class="col-4 text-center"> <div class="tn_rs_chs_txt">OI</div></div>
              <div class="col-4 text-end"> <div class="tn_rs_chs_txt">RATE</div></div>
            </div>
            <div class="tn_rs_chs_list_scrl2 mCustomScrollbar" data-mcs-theme="minimal">
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-4"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-center"> <div class="tn_rs_chs_txt">103.332</div></div>
                  <div class="col-4 text-end"> <div class="tn_rs_chs_txt">- 24%</div></div>
                </div>
              </div>
            </div>









          </div>
          <div class="tn_right_sid_bar_tab" data-navn="t4">
            <div class="tn_right_sid_bar_tab_hd mb-0">
              <i class="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
            </div>
            <div class="row g-2 srk_mb_1 tn_right_sid_bar_tab_tbhd">
              <div class="col-3"> <div class="tn_rs_chs_txt">SYMBOL</div></div>
              <div class="col-3 text-center"> <div class="tn_rs_chs_txt">Last</div></div>
              <div class="col-3 text-center"> <div class="tn_rs_chs_txt">%</div></div>
              <div class="col-3 text-end"> <div class="tn_rs_chs_txt">Vol</div></div>
            </div>
            <div class="tn_rs_chs_list_scrl mCustomScrollbar" data-mcs-theme="minimal">
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>
              <div class="tn_rs_chs_list">
                <div class="row g-2">
                  <div class="col-3"> <img src={bitcoinLogo} class="tn_hh_chs_list_ico" /></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">133.222</div></div>
                  <div class="col-3 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                  <div class="col-3 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
                </div>
              </div>





            </div>
          </div>
          <div class="tn_right_sid_bar_tab " data-navn="t5">



            <div class="tn_rs_ld_set_scrl tn_right_sid_bar_tab_t5 mCustomScrollbar" data-mcs-theme="minimal">
              <div class="tn_rs_ld_set">
                <div class="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6"> A Simple & secure way to buy Bitcon</div>
                <div class="srk srk_fs_1 srk_fw_400 srk_clr_bright_green "> A Simple & secure way to buy Bitcon</div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6"> A Simple & secure way to buy Bitcon</div>
                <div class="srk srk_fs_1 srk_fw_400 srk_clr_bright_green "> A Simple & secure way to buy Bitcon</div>
              </div>
              <div class="tn_rs_ld_set">
                <div class="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6"> A Simple & secure way to buy Bitcon</div>
                <div class="srk srk_fs_1 srk_fw_400 srk_clr_bright_green "> A Simple & secure way to buy Bitcon</div>
              </div>

            </div>

          </div>
          <div class="tn_right_sid_bar_tab" data-navn="t6">
            <div class="tn_right_sid_bar_tab_hd">Top Gainers
              <i class="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
            </div>
            <div class="tn_rs_ld_set srk_mb_1">
              <div class="row srk_mb_1">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
              <div class="row srk_mb_1">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
              <div class="row srk_mb_1">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
              <div class="row ">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div class="tn_right_sid_bar_tab_hd srk_mt_2">Top losers</div>
            <div class="tn_rs_ld_set mb-0">
              <div class="row srk_mb_1">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
              <div class="row srk_mb_1">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
              <div class="row srk_mb_1">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
              <div class="row ">
                <div class="col-2">
                  <img src={bitcoinLogo} class="tn_hh_chs_list_ico" />
                </div>
                <div class="col-5 text-center"> <div class="tn_rs_chs_txt">20</div></div>
                <div class="col-5 text-end"> <div class="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}
