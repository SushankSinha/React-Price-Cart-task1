import React from "react";
import Response from "./Response";
import "../styles.css";
import Template from "./Template";

export default function App() {
  return (
    <div>
      {Response.map(function (res, index) {
        return (
          <Template
            key={index}
            type={res.type}
            fee={res.fee}
            user={res.user}
            storage={res.storage}
            public_projects={res.public_projects}
            access={res.access}
            private_projects={res.private_projects}
            support={res.support}
            subdomain={res.subdomain}
            reports={res.reports}
          />
        );
      })}
    </div>
  );
}
