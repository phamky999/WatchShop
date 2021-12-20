import React from "react";
import PropTypes from "prop-types";
import "./ItemCheckBox.css";
export default function ItemCheckBox(props) {
  const onChange = (group,id,event) => {
    // props.onClick(group,id,event.target.checked);
  }
  return (
    <li className="checkbox-item">
      <label className="checkbox-item-content">
        <input type="checkbox" name="checkbox"  onChange={onChange.bind(null, props.group,props.id)} />
        {props?.name}
      </label>
    </li>
  );
}

ItemCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
};
