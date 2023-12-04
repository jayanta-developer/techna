import React from 'react'

import Logo from "../../Assets/img/logo.png"

export default function HomeNav({ setSideNav, sideNav }) {
  return (
    <>
      <div className="s_nav_set">
        <div className="container-fluid s_container_hdr_ftr">
          <div className="d-flex justify-content-between">
            <a href="./" className="s_nav_logo">
              <img src={Logo} className="s_nav_logo_img" alt="" />
            </a>
            <i onClick={() => setSideNav(!sideNav)} className="far fa-bars s_nav_ul_cls"></i>
            <div style={{ width: sideNav ? "100%" : "0px" }} className="s_nav_ul">
              <a href="#" className="s_nav_logo_mbl">
                <img src={Logo} className="s_nav_logo_img" alt="" />
              </a>
              <div className="s_nav_ul_in">
                <a href='#products' className="s_nav_li ">Products </a>
                <a href='#FAQ' className="s_nav_li ">FAQ's </a>
                <a href='#roadmap' className="s_nav_li ">Roadmap </a>
                <a href='#tokenomics' className="s_nav_li ">Tokenomics </a>
                <a href='#community' className="s_nav_li ">Community </a>
              </div>
            </div>
            <div className="s_nav_right">
              <a href="#" className="s_btn_outline s_ftr_contact_btn">Whitepaper</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
