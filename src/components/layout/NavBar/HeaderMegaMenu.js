import React from 'react'

import "./HeaderMegaMenu.css";

import DUMY_MEGA_MENU from "../../../assets/fake_data/NavBarData";
import MegaMenuSubNav from './MegaMenuSubNav';



export default function HeaderMegaMenu(props) {

    const closeMobileMenuHandler = ()=>{
        props.onClose()
    }
    let content =(
        <div className={`${props.isShow ? "header-menu megamenu active" : "header-menu megamenu"}`}>
              <div className="megamenu-mobile">
                <div className="megamenu-mobile-close-btn">
                  <i className="bx bx-x" onClick={closeMobileMenuHandler}></i>
                </div>
                <h3 className="megamenu-mobile-title">
                  <i className="bx bx-menu"></i>
                  <span>Menu</span>
                </h3>
              </div>
              <ul className="megamenu-list">
                  {
                    DUMY_MEGA_MENU.map((item,index) =>(<MegaMenuSubNav key={index} item={item} onClose={closeMobileMenuHandler} />))
                  }
              </ul>
          </div>
    )
    return (content)
}
