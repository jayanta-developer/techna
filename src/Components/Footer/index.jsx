import React from 'react';
import "./style.css"

//images
import Logo from "../../Assets/img/logo.png"
import ftr1 from "../../Assets/img/ftr-1.png"
import ftr2 from "../../Assets/img/ftr-2.png"
import ftr3 from "../../Assets/img/ftr-3.png"


export default function Footer() {
  return (
    <>
      <footer className="ts_ftr_sec">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-5">
              <a href="#" className="">
                <img src={Logo} className="ts_ftr_sec_logo" alt="" />
              </a>
              <p className="srk srk_fs_1 srk_fw_400 ts_ftr_sec_logo_p srk_ln_1dot6 srk_clr_white_1 srk_mb_1dot5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed purus accumsan, dapibus diam eget, congue nibh. Fusce eu pulvinar est. Pellentesque eleifend vel ex eu iaculis.
              </p>
              <div className="ts_ftr_scico">
                <a href="#" className="ts_ftr_sico_a">
                  <img src={ftr1} className="ts_ftr_sico" alt="" />
                </a>
                <a href="#" className="ts_ftr_sico_a">
                  <img src={ftr2} className="ts_ftr_sico" alt="" />
                </a>
                <a href="#" className="ts_ftr_sico_a">
                  <img src={ftr3} className="ts_ftr_sico" alt="" />
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
    </>
  )
}
