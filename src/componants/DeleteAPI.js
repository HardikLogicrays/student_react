import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DeleteAPI(props) {
  const location = useLocation();

  const [success, setSuccess] = useState("");

  let navigate = useNavigate();

  const responseData = (res) => {
    if (res.status === 200) {
      setSuccess("Student Deleted Successfully.");

      setTimeout(function () {
        setSuccess("");
        navigate("/");
      }, 0);
    }
  };

  const DeleteData = () => {

    // const url = `http://127.0.0.1:8000/delete/${location.state.id}/`;

    const url = `${props.host}/delete/${location.state.id}/`;

    fetch(url, { method: "DELETE" }).then((res) => responseData(res));

    // setTimeout(function () {
    //   setSuccess("");
    // }, 2000);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-around mt-5">
          <div
            className="col-sm-8 border pt-4 pb-4"
            style={{ backgroundColor: "#CECECE", borderRadius: "15px" }}
          >
            <h4 className="text-danger">
              Are you sure to delete ID: {location.state.id}
            </h4>

            <button className="btn btn-danger m-3" onClick={DeleteData}>
              Yes
            </button>
            
              <button className="btn btn-success m-3" onClick={()=>{navigate(-1)}}>No</button>
           

            <p className="mt-4 text-success">{success}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteAPI;
