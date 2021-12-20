import React, {useState,useEffect, useRef} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./MegaMenuSubNav.css";
export default function MegaMenuSubNav(props) {

  const [isShowDropdown, setIsDropdown] = useState(false);

  const toggleDropdownHandler = (e)=>{
    e.preventDefault();
    console.log("click")
    setIsDropdown(!isShowDropdown)
  }

  let menu_content = "";
  if (props.item?.subNav === undefined) {
    menu_content = <Link onClick={()=>{props.onClose()}} to={props.item.path}>{props.item.title}</Link>;
  } else {
    const { title, path, subNav } = props.item;
    let subNav_content = "";
    if (subNav.length === 1) {
      subNav_content = (
        <ul className={`menu-dropdown-ul ${title.toLowerCase()}-ul ${isShowDropdown ? "active" : ""}`}>
          {subNav[0].sub_item.map((item, index) => (
            <li key={index} onClick={()=>{props.onClose()}} className="menu-dropdown-li">
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      );
      menu_content = (
        <React.Fragment>
          <p onClick={toggleDropdownHandler}>
            <span>{title}</span>
            <i className={`${isShowDropdown ? "bx bx-chevron-up" : "bx bx-chevron-down" }`}></i>
          </p>
          {
            subNav_content
          }
        </React.Fragment>
      );
    } else if (subNav.length > 1) {
      subNav_content = (
        <ul className={`menu-dropdown-ul ${title.toLowerCase()}-ul ${isShowDropdown ? "active" : ""}`}>
          {subNav.map((item, index) => {
            if (item.sub_title !== undefined) {
              let sub_ul = item.sub_item.map((item, index) => (
                <li key={index} className="submenu-li" onClick={()=>{props.onClose()}}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ));

              return (
                <li key={index} className="menu-dropdown-li">
                  <h3>{item.sub_title}</h3>
                  <ul className="submenu-ul">{sub_ul}</ul>
                </li>
              );
            } else {
              let sub_ul = item.sub_item.map((item, index) => (
                  <Link to={item.path} onClick={()=>{props.onClose()}} key={index}>
                    <img alt={item.title} src={item.image} />
                  </Link>
              ));
              return (
                <li key={index} className="menu-dropdown-li li-banner">
                  {sub_ul}
                </li>
              );
            }
          })}
        </ul>
      );
      menu_content = (
        <React.Fragment>
          <p onClick={toggleDropdownHandler}>
            <span>{title}</span>
            <i className={`${isShowDropdown ? "bx bx-chevron-up" : "bx bx-chevron-down" }`}></i>
          </p>
          {
             subNav_content
          }
        </React.Fragment>
      );
    }
  }
  return (
    <li className={`megamenu-li ${props.item?.subNav ? props.item.title.toLowerCase() + "-dropdown" : ""}`}>
      {menu_content}
    </li>
  );
}
