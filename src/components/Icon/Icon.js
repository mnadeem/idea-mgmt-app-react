import React from "react";
import Icons from "../../svgs/Icons.svg";
import PropTypes from "prop-types";

const Icon = ({ name, color, size , classNames}) => (
  <svg className={`icon icon-${name} ${classNames}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
