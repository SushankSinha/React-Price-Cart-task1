import React from "react";

function Checked(props) {
  return (
    <li>
      <span className="fa-li">
        <i className="fas fa-check"></i>
      </span>
      {props.user}
      {props.storage}
      {props.public_projects}
      {props.access}
      {props.private_projects}
      {props.support}
      {props.subdomain}
      {props.reports}
    </li>
  );
}

export default Checked;
