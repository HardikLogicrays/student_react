import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="container">
        <div
          className="row mt-5 pt-4 pb-4"
          style={{ backgroundColor: "#dedede" }}
        >
          <div className="col-sm">
            <Link to="/">
              <button className="btn btn-success">Show Data</button>
            </Link>
          </div>

          <div className="col-sm">
            <Link to="/create">
              <button className="btn btn-primary">Create Data</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
