import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PutAPI( props) {
  const location = useLocation();

  const [names, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [citys, setCity] = useState("");

  const [nameError, setnameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [cityError, setcityError] = useState("");

  const [success, setSuccess] = useState("");

  useEffect(() => {
    setName(location.state.name);
    setEmail(location.state.email);
    setCity(location.state.city);
  }, []);

  const FieldValidation = () => {
    if (names === "") {
      setnameError("Name is not be blank.");
    } else {
      setnameError("");
    }

    if (emails === "") {
      setemailError("Email is not be blank.");
    } else {
      setemailError("");
    }

    if (citys === "") {
      setcityError("City is not be blank.");
    } else {
      setcityError("");
    }
  };

  let navigate = useNavigate();

  const responseData = (res) => {
    if (res.msg) {
      setSuccess(res.msg);
      setTimeout(function () {
        setSuccess("");
        navigate("/");
      }, 1000);
    }
  };

  const SubmitHandle = (event) => {
    const data = {
      name: names,
      email: emails,
      city: citys,
    };

    FieldValidation();

    // const url = `http://127.0.0.1:8000/update/${location.state.id}/`;

    const url = `${props.host}/update/${location.state.id}/`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((res) => responseData(res));

    // setTimeout(function () {
    //   setSuccess("");
    //   navigate("/");
    // }, 2000);

    event.preventDefault();
  };

  return (
    <>
      <div className="container border">
        <div className="row">
          <div className="col-sm-2 pt-5">
            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go back
            </button>
          </div>
          <div className="col-sm-8">
            <h1 className="pt-5 pb-4" style={{ letterSpacing: "2px" }}>
              Update Student
            </h1>
          </div>
        </div>

        <div className="row border p-5" style={{ backgroundColor: "#dedede" }}>
          <div>
            <form onSubmit={SubmitHandle}>
              <div className="form-group mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={names}
                  onChange={(event) => setName(event.target.value)}
                />
                <p className="text-danger">{nameError}</p>
              </div>
              <div className="form-group mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={emails}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <p className="text-danger">{emailError}</p>
              </div>
              <div className="form-group mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  value={citys}
                  onChange={(event) => setCity(event.target.value)}
                />
                <p className="text-danger">{cityError}</p>
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <p className="mt-4 text-success">{success}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PutAPI;
