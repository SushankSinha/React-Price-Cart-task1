import React from "react";
import Checked from "./Checked";
import Unchecked from "./Unchecked";

function Template(props) {
  return (
    <section className="pricing py-5" >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0" >
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {props.type}
                </h5>
                <h6 className="card-price text-center">
                  {props.fee}
                  <span className="period">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <Checked user={props.user} />
                  <Checked storage={props.storage} />
                  <Checked public_projects={props.public_projects} />
                  <Checked access={props.access} />
                  {props.fee === "$0" && (
                    <>
                      <Unchecked private_projects={props.private_projects} />
                      <Unchecked support={props.support} />
                      <Unchecked subdomain={props.subdomain} />
                      <Unchecked reports={props.reports} />
                    </>
                  )}
                  {props.fee === "$9" && (
                    <>
                      <Checked private_projects={props.private_projects} />
                      <Checked support={props.support} />
                      <Checked subdomain={props.subdomain} />
                      <Unchecked reports={props.reports} />{" "}
                    </>
                  )}
                  {props.fee === "$49" && (
                    <>
                      <Checked private_projects={props.private_projects} />
                      <Checked support={props.support} />
                      <Checked subdomain={props.subdomain} />
                      <Checked reports={props.reports} />
                    </>
                  )}
                </ul>
                <div className="d-grid">
                  <button className="btn btn-primary text-uppercase">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Template;
