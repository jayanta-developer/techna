import React from 'react';
import "./style.css"


//components


//images
import bitcoinLogo from "../../Assets/img/bitcoin logo.png"
import Logo from "../../Assets/img/logo.png"
import homeico1 from "../../Assets/img/home-ico-1.png"
import homeico2 from "../../Assets/img/home-ico-2.png"
import homeico3 from "../../Assets/img/home-ico-3.png"
import tmico6 from "../../Assets/img/tmico-6.png"
import homefaqsidimg from "../../Assets/img/home-faq-sidimg.png"
import com1 from "../../Assets/img/com-1.png"
import com2 from "../../Assets/img/com-2.png"
import com3 from "../../Assets/img/com-3.png"
import com4 from "../../Assets/img/com-4.png"
import com5 from "../../Assets/img/com-5.png"
import ftr1 from "../../Assets/img/ftr-1.png"
import ftr2 from "../../Assets/img/ftr-2.png"
import ftr3 from "../../Assets/img/ftr-3.png"


export default function Home() {
  return (
    <>
      <div className="tn_sid_bar_totset">
        <div className="tn_right_sid_bar">
          <i className="fab fa-bitcoin tn_right_sid_bar_i" data-navn="t1"></i>
          <i className="fas fa-volume tn_right_sid_bar_i" data-navn="t2"></i>
          <i className="fas fa-presentation-screen tn_right_sid_bar_i" data-navn="t3"></i>
          <i className="fas fa-chart-line-up tn_right_sid_bar_i" data-navn="t4"></i>
          <i className="fas fa-droplet tn_right_sid_bar_i" data-navn="t5"></i>
          <i className="fas fa-messages-question tn_right_sid_bar_i" data-navn="t6"></i>
        </div>
        <div className="tn_right_sid_bar_tab " data-navn="t1">
          <div className="tn_right_sid_bar_tab_innn">
            <div className="tn_right_sid_bar_tab_hd">Chat
              <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
            </div>
            <div className="tn_rs_chatbox mCustomScrollbar" data-mcs-theme="minimal">
              <div className="tn_rs_chatbox_in">
                <div className="tn_rs_chatbox_chatting_out">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
                <div className="tn_rs_chatbox_chatting_out">
                  <div className="tn_rs_chatbox_chatting">Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                    <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tn_rs_chatbox_input">
              <a href="#">
                <i className="tn_rs_chatbox_input_in_ico fas fa-paper-plane-top"></i>
              </a>
              <input type="text" placeholder="Type here" className="tn_rs_chatbox_input_in" />
            </div>
          </div>
        </div>
        <div className="tn_right_sid_bar_tab" data-navn="t2">
          <div className="tn_right_sid_bar_tab_hd">Liqutation
            <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
          </div>
          <div className="tn_rs_ld_set_scrl mCustomScrollbar" data-mcs-theme="minimal">
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="row">
                <div className="col-auto">
                  <img src={bitcoinLogo} className="tn_rs_ld_ico" />
                </div>
                <div className="col">
                  <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">$ 6767.45</div>
                  <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">~ $ 6767.45</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tn_right_sid_bar_tab " data-navn="t3">
          <div className="tn_right_sid_bar_tab_hd mb-0">
            <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
          </div>
          <select className="tn_rs_chs_select">
            <option value="0">Choose Token</option>
            <option value="0">BTC</option>
            <option value="0">ETH</option>
          </select>
          <div className="row g-2 srk_mb_1">
            <div className="col-4"> <div className="tn_rs_chs_txt">SYMBOL</div></div>
            <div className="col-4 text-center"> <div className="tn_rs_chs_txt">OI</div></div>
            <div className="col-4 text-end"> <div className="tn_rs_chs_txt">RATE</div></div>
          </div>
          <div className="tn_rs_chs_list_scrl2 mCustomScrollbar" data-mcs-theme="minimal">
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-4"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-center"> <div className="tn_rs_chs_txt">103.332</div></div>
                <div className="col-4 text-end"> <div className="tn_rs_chs_txt">- 24%</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="tn_right_sid_bar_tab" data-navn="t4">
          <div className="tn_right_sid_bar_tab_hd mb-0">
            <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
          </div>
          <div className="row g-2 srk_mb_1 tn_right_sid_bar_tab_tbhd">
            <div className="col-3"> <div className="tn_rs_chs_txt">SYMBOL</div></div>
            <div className="col-3 text-center"> <div className="tn_rs_chs_txt">Last</div></div>
            <div className="col-3 text-center"> <div className="tn_rs_chs_txt">%</div></div>
            <div className="col-3 text-end"> <div className="tn_rs_chs_txt">Vol</div></div>
          </div>
          <div className="tn_rs_chs_list_scrl mCustomScrollbar" data-mcs-theme="minimal">
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
            <div className="tn_rs_chs_list">
              <div className="row g-2">
                <div className="col-3"> <img src={bitcoinLogo} className="tn_hh_chs_list_ico" /></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">133.222</div></div>
                <div className="col-3 text-center"> <div className="tn_rs_chs_txt">20</div></div>
                <div className="col-3 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="tn_right_sid_bar_tab " data-navn="t5">
          <div className="tn_rs_ld_set_scrl tn_right_sid_bar_tab_t5 mCustomScrollbar" data-mcs-theme="minimal">
            <div className="tn_rs_ld_set">
              <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6"> A Simple & secure way to buy Bitcon</div>
              <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green "> A Simple & secure way to buy Bitcon</div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6"> A Simple & secure way to buy Bitcon</div>
              <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green "> A Simple & secure way to buy Bitcon</div>
            </div>
            <div className="tn_rs_ld_set">
              <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6"> A Simple & secure way to buy Bitcon</div>
              <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green "> A Simple & secure way to buy Bitcon</div>
            </div>
          </div>
        </div>
        <div className="tn_right_sid_bar_tab" data-navn="t6">
          <div className="tn_right_sid_bar_tab_hd">Top Gainers
            <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i>
          </div>
          <div className="tn_rs_ld_set srk_mb_1">
            <div className="row srk_mb_1">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
            <div className="row srk_mb_1">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
            <div className="row srk_mb_1">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
            <div className="row ">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
          </div>
          <div className="tn_right_sid_bar_tab_hd srk_mt_2">Top losers</div>
          <div className="tn_rs_ld_set mb-0">
            <div className="row srk_mb_1">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
            <div className="row srk_mb_1">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
            <div className="row srk_mb_1">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
            <div className="row ">
              <div className="col-2">
                <img src={bitcoinLogo} className="tn_hh_chs_list_ico" />
              </div>
              <div className="col-5 text-center"> <div className="tn_rs_chs_txt">20</div></div>
              <div className="col-5 text-end"> <div className="tn_rs_chs_txt srk_fw_800">- 30%</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="s_web_wrapper">
        <div className="s_hm_bg_line"></div>
        <div className="s_web_wrapper_in">
          <div className="s_nav_set">
            <div className="container-fluid s_container_hdr_ftr">
              <div className="d-flex justify-content-between">
                <a href="#" className="s_nav_logo">
                  <img src={Logo} className="s_nav_logo_img" alt="" />
                </a>
                <i className="far fa-bars s_nav_ul_cls"></i>
                <div className="s_nav_ul">
                  <a href="#" className="s_nav_logo_mbl">
                    <img src={Logo} className="s_nav_logo_img" alt="" />
                  </a>
                  <div className="s_nav_ul_in">
                    <a className="s_nav_li ">Products </a>
                    <a className="s_nav_li ">FAQ's </a>
                    <a className="s_nav_li ">Roadmap </a>
                    <a className="s_nav_li ">Tokenomics </a>
                    <a className="s_nav_li ">Community </a>
                  </div>
                </div>
                <div className="s_nav_right">
                  <a href="#" className="s_btn_outline s_ftr_contact_btn">Whitepaper</a>
                </div>
              </div>
            </div>
          </div>
          <section className=" ts_hm1_sec">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-6">
                  <h1 className="srk_fw_700 ts_hm1_sec_hdng">TRADE SMARTER <br />WITH TECHNA</h1>
                  <p className="srk srk_fs_1 srk_clr_white_1 srk_fw_300 srk_ln_1dot9 srk_mb_1dot9 ts_hm1_sec_hdng_p">Maximize Your Trading Potential with TechNa's AI-Driven Financial Devices Hybrid Blockchain, and Social Network for Traders.</p>
                  <div className="row srk_mb_1dot9">
                    <div className="col-6"><a href="#" className="ts_btn_comn w-100 ts_normal_font">
                      <img src={homeico1} className="ts_btn_comn_ico" /> Demo</a></div>
                    <div className="col-6"><a href="#" className="ts_btn_comn w-100 ts_normal_font">
                      <img src={homeico2} className="ts_btn_comn_ico" /> Buy TCN</a></div>
                  </div>
                  <div className="ts_hm1_shap1">
                    <div className="row w-100 g-5">
                      <div className="col">
                        <div className="srk srk_fs_2 srk_fw_400 srk_mb_1dot3 srk_clr_white_1 ts_normal_font">
                          TechNa (TCN)
                        </div>
                        <div className="srk srk_fs_3dot5 srk_fw_600   ts_normal_font srk_clr_brightgrn">
                          $1.324
                        </div>
                      </div>
                      <div className="col-auto">
                        <img src={homeico3} className="img-fluid ts_hm1_shap1_ico" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                </div>
              </div>
            </div>
            <div className="s_hm_botgirl"></div>
          </section>
          <section className=" ts_hm2_sec">
            <div className="container">
              <div className="ts_pg_sec_hdng_set text-center">
                <div className="ts_pg_sec_hdng">Products</div>
                <div className="ts_pg_sec_hdng_p"></div>
              </div>
              <span className="tag-wrap">
                <span className="tag">
                  Tag
                </span>
              </span>
              <div className="row g-5 mt-5">
                <div className="col-md-4">
                  <div className="ts_hm2_dv_2_out">
                    <div className="ts_hm2_dv_2">
                      <div className="ts_hm2_dv_2_in">
                        <div className="ts_hm2_dv_2_vid_out">
                          <img src={tmico6} className="ts_hm2_dv_2_vid_in" />
                        </div>
                        <div className="srk srk_fs_1dot5 srk_clr_white_1 srk_fw_800 srk_mb_0dot5">Hedging</div>
                        <div className="srk srk_fs_0dot9 srk_clr_white_1 srk_fw_300 srk_ln_1dot6">The AI-driven financial platform trader, Trade smarter with our hedging tools and user-firendly devices.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ts_hm2_dv_2">
                    <div className="ts_hm2_dv_2_vid_out">
                      <img src={tmico6} className="ts_hm2_dv_2_vid_in" />
                    </div>
                    <div className="srk srk_fs_1dot5 srk_clr_white_1 srk_fw_800 srk_mb_0dot5">Hedging</div>
                    <div className="srk srk_fs_0dot9 srk_clr_white_1 srk_fw_300 srk_ln_1dot6">The AI-driven financial platform trader, Trade smarter with our hedging tools and user-firendly devices.</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ts_hm2_dv_2">
                    <div className="ts_hm2_dv_2_vid_out">
                      <img src={tmico6} className="ts_hm2_dv_2_vid_in" />
                    </div>
                    <div className="srk srk_fs_1dot5 srk_clr_white_1 srk_fw_800 srk_mb_0dot5">Hedging</div>
                    <div className="srk srk_fs_0dot9 srk_clr_white_1 srk_fw_300 srk_ln_1dot6">The AI-driven financial platform trader, Trade smarter with our hedging tools and user-firendly devices.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm3_sec">
            <div className="container">
              <div className="ts_pg_sec_hdng_set text-center">
                <div className="ts_pg_sec_hdng">Roadmap</div>
                <div className="ts_pg_sec_hdng_p">The largest and unique Super rare NFT marketplace<br /> For crypto-collectibles</div>
              </div>
              <div className="row g-0 position-relative">
                <div className="ts_hm_road_cntr_line"></div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_1">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">January</div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">Brief</div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec failisis senectus eget.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_2">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">January</div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">Brief</div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec failisis senectus eget.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_1">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">January</div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">Brief</div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec failisis senectus eget.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_2">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">January</div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">Brief</div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec failisis senectus eget.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_1">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">January</div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">Brief</div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec failisis senectus eget.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_2">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">January</div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">Brief</div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec failisis senectus eget.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm4_sec">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-5">
                  <div className="ts_pg_sec_hdng_set ">
                    <div className="ts_pg_sec_hdng">Frequently Asked Questions</div>
                    <div className="ts_pg_sec_hdng_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non dui blanditLorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  </div>
                  <img src={homefaqsidimg} className="img-fluid" />
                </div>
                <div className="col-md-7">
                  <div className="ts_hm_faq_dv ts_hm_faq_dv_act">
                    <div className="ts_hm_faq_dv_hd">
                      Lorem ipsum dolor sit amet
                      <div className="ts_grad_border_dv"></div>
                    </div>
                    <div className="ts_hm_faq_dv_bdy">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis. Suspendisse porttitor enim turpis, sit amet fermentum tellus interdum at. Ut molestie condimentum pharetra. Integer a mauris mi.
                    </div>
                  </div>
                  <div className="ts_hm_faq_dv ">
                    <div className="ts_hm_faq_dv_hd">
                      Lorem ipsum dolor sit amet
                      <div className="ts_grad_border_dv"></div>
                    </div>
                    <div className="ts_hm_faq_dv_bdy">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis. Suspendisse porttitor enim turpis, sit amet fermentum tellus interdum at. Ut molestie condimentum pharetra. Integer a mauris mi.
                    </div>
                  </div>
                  <div className="ts_hm_faq_dv ">
                    <div className="ts_hm_faq_dv_hd">
                      Lorem ipsum dolor sit amet
                      <div className="ts_grad_border_dv"></div>
                    </div>
                    <div className="ts_hm_faq_dv_bdy">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis. Suspendisse porttitor enim turpis, sit amet fermentum tellus interdum at. Ut molestie condimentum pharetra. Integer a mauris mi.
                    </div>
                  </div>
                  <div className="ts_hm_faq_dv ">
                    <div className="ts_hm_faq_dv_hd">
                      Lorem ipsum dolor sit amet
                      <div className="ts_grad_border_dv"></div>
                    </div>
                    <div className="ts_hm_faq_dv_bdy">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis. Suspendisse porttitor enim turpis, sit amet fermentum tellus interdum at. Ut molestie condimentum pharetra. Integer a mauris mi.
                    </div>
                  </div>
                  <div className="ts_hm_faq_dv ">
                    <div className="ts_hm_faq_dv_hd">
                      Lorem ipsum dolor sit amet
                      <div className="ts_grad_border_dv"></div>
                    </div>
                    <div className="ts_hm_faq_dv_bdy">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis. Suspendisse porttitor enim turpis, sit amet fermentum tellus interdum at. Ut molestie condimentum pharetra. Integer a mauris mi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm5_sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="ts_pg_sec_hdng_set text-center">
                    <div className="ts_pg_sec_hdng">Tokenomics Information</div>
                    <div className="ts_pg_sec_hdng_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non dui blanditLorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center text-center srk_mt_1dot5">
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">Token Name</div>
                  <div className="srk srk_fs_3 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">TechNa</div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">Token Symbol</div>
                  <div className="srk srk_fs_3 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">TCN</div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">Token Supply</div>
                  <div className="srk srk_fs_2dot5 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">400M</div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">Blockchain</div>
                  <div className="srk srk_fs_3 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">Polygon</div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm7_sec">
            <div className="container">
              <div className="row h-md-100">
                <div className="col-md-7">
                  <div className="sk_pie_chart_out_div">
                    <div className="sk_pie_chart_out">
                      <div className="sk_pie_chart_in_ring"></div>
                      <div className="sk_pie_chart_in">
                        <div className="sk_pie_chart_in_h1">Total Supply</div>
                        <div className="sk_pie_chart_in_h2">100.000.000.000
                          Tokens</div>
                      </div>
                      <div className="sk_pie_chart_lbls">
                        <div className="sk_pie_chart_lbls_in skpchls-1">
                          15<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Team</div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-2">
                          12<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Strategic Partners & Advisors</div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-3">
                          21.5<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Exchange Listing & Liquidify</div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-4">
                          24.5<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Staking, In-game Rewards & Development</div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-5">
                          16<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Company Reserves</div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-6">
                          11<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Marketing</div>
                        </div>
                      </div>
                      <div id="chartdiv"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="sk_chart_sid_dv_totout">
                    <div className="sk_chart_sid_dv mt-md-0">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%  <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">Team</span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm6_sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="ts_pg_sec_hdng_set text-center">
                    <div className="ts_pg_sec_hdng">Community</div>
                    <div className="ts_pg_sec_hdng_p">Join Us At</div>
                  </div>
                </div>
              </div>
              <div className="ts_hm_com_set">
                <div className="row justify-content-center text-center srk_mt_1dot5">
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com1} className="ts_hm_com_ico" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">Discord</div>
                    </a>
                  </div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com2} className="ts_hm_com_ico" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">Reddit</div>
                    </a></div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com3} className="ts_hm_com_ico" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">Telegram</div>
                    </a></div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com4} className="ts_hm_com_ico" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">Twitter</div>
                    </a></div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com5} className="ts_hm_com_ico" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">Tiktok</div>
                    </a></div>
                </div>
              </div>
            </div>
          </section>
          <footer className="ts_ftr_sec">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-5">
                  <a href="#" className="">
                    <img src={Logo} className="ts_ftr_sec_logo" />
                  </a>
                  <p className="srk srk_fs_1 srk_fw_400 ts_ftr_sec_logo_p srk_ln_1dot6 srk_clr_white_1 srk_mb_1dot5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis.
                  </p>
                  <div className="ts_ftr_scico">
                    <a href="#" className="ts_ftr_sico_a">
                      <img src={ftr1} className="ts_ftr_sico" />
                    </a>
                    <a href="#" className="ts_ftr_sico_a">
                      <img src={ftr2} className="ts_ftr_sico" />
                    </a>
                    <a href="#" className="ts_ftr_sico_a">
                      <img src={ftr3} className="ts_ftr_sico" />
                    </a></div>
                </div>
                <div className="col-md-7">
                  <div className="row g-5">
                    <div className="col-md-4">
                      <div className="ts_ftr_sec_hd">Site Map</div>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                    </div>
                    <div className="col-md-4">
                      <div className="ts_ftr_sec_hd">Site Map</div>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                    </div>
                    <div className="col-md-4">
                      <div className="ts_ftr_sec_hd">Site Map</div>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                      <a href="#" className="ts_ftr_sec_li">Product Videos</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="ts_ftr_sec_cpy">Copyright <span className="srk_clr_brightgrn">Tokenomics</span> core 2022 All right reserved</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>    
    </>
  )
}
