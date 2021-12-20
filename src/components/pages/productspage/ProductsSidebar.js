import React, { useState } from "react";

import ItemCheckBox from "../../UI/ItemCheckBox";
import ItemColor from "../../UI/ItemColor";

import "./ProductsSidebar.css";

function ProductsSidebar(props) {
  
  const clickCheckBoxHandler = (group, id,status) => {
    // props.onChangeFilter(group, id, status)
  };

  const chooseColorHandler = (group, id) => {
    if (group === "colors") {
      
    }
  };
  const removeFilterHandler = (event) => {
  };

  const filterSubmitHandler = (event) => {
    event.preventDefault();
    
  };

  return (
    <div
      className={` ${
        props.isShowMobile === false
          ? "products-sidebar-box slidebar-lg-fixed"
          : "products-sidebar-box active slidebar-lg-fixed"
      }`}
    >
      <div className="products-sidebar-menu-header">
        <div>
          <h3>Menu</h3>
        </div>
        <div
          className="sidebar-menu-close-icon"
          onClick={() => props.onClose()}
        >
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="products-sidebar-menu-body">
        <div className="sidebar-menu categories">
          <h3>Categories</h3>
          <div>
            <ul>
              {props.categories.map((item) => (
                <ItemCheckBox
                  onClick={clickCheckBoxHandler}
                  key={item.id}
                  group="categories"
                  name={item.name}
                  id={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-menu colors">
          <h3>Color</h3>
          <div>
            <ul className="color-list">
              {props.colors.map((item) => (
                <ItemColor
                  onClick={chooseColorHandler}
                  key={item.id}
                  group="colors"
                  id={item.id}
                  color={item.color}
                  name={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-menu materials">
          <h3>Material</h3>
          <div>
            <ul>
              {props.materials.map((item) => (
                <ItemCheckBox
                  onClick={clickCheckBoxHandler}
                  key={item.id}
                  group="materials"
                  name={item.name}
                  id={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-menu size">
          <h3>Size</h3>
          <div>
            <ul>
              {props.size.map((item) => (
                <ItemCheckBox
                  onClick={clickCheckBoxHandler}
                  key={item.id}
                  group="sizes"
                  id={item.id}
                  name={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-menu price">
          <h3>Price</h3>
          <div>
            <ul>
              {props.priceFilter.map((item) => {
                let displayPrice = "";
                if (item.priceEnd === undefined) {
                  displayPrice = "Over " + item.priceStart;
                } else {
                  displayPrice = item.priceStart + " - " + item.priceEnd;
                }
                return (
                  <ItemCheckBox
                    onClick={clickCheckBoxHandler}
                    key={item.id}
                    group="price"
                    id={item.id}
                    name={displayPrice.toString()}
                    priceStart={item.priceStart}
                    priceEnd={item.priceEnd}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sidebar-menu tag">
          <h3>Tag</h3>
          <div>
            <ul>
              {props.tag.map((item) => (
                <ItemCheckBox
                  onClick={clickCheckBoxHandler}
                  key={item.id}
                  group="tags"
                  id={item.id}
                  name={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="products-sidebar-menu-bottom">
        <button
          className="sidebar-menu-btn btn--success"
          onClick={filterSubmitHandler}
        >
          Done
        </button>
        <button
          className="sidebar-menu-btn btn--clean"
          onClick={removeFilterHandler}
        >
          Remove
        </button>
        <button
          className="sidebar-menu-btn btn--cancel"
          onClick={() => props.onClose()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ProductsSidebar;
