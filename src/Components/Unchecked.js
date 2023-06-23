import React from "react";

function Unchecked(props) {
  return (
    <li className="text-muted">
      <span className="fa-li">
        <i className="fas fa-times"></i>
      </span>
      {props.private_projects}
      {props.support}
      {props.subdomain}
      {props.reports}
    </li>
  );
}

export default Unchecked;
