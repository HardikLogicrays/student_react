import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

function GetAPI(props) {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    // const url = "http://127.0.0.1:8000/students/";
    const url = `${props.host}/students/`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setStudent(res));
  }, []);

  let navigate = useNavigate();

  return (
    <>
      {/* <Header /> */}
      <div className="container">
        {/* <h1 className="pt-5 pb-4">GET API</h1> */}

        <div className="row justify-content-end">
          <div className="col-sm-8">
            <h1 className="pt-5 pb-4" style={{ letterSpacing: "2px" }}>
              Student Dashboard
            </h1>
          </div>
          <div className="col-sm-2 pt-5 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create Data</button>
            </Link>
          </div>
        </div>

        <div className="row p-3" style={{ backgroundColor: "#dedede" }}>
          {students.map((student) => (
            <div
              key={student.id}
              className="col-sm-3 border p-3"
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <h3>ID: {student.id} </h3>
              <p>Name: {student.name}</p>
              <p>Email: {student.email}</p>
              <p>City: {student.city}</p>
              <div className="justify-content-between">
                <Link
                  to="/update"
                  state={{
                    id: student.id,
                    name: student.name,
                    email: student.email,
                    city: student.city,
                  }}
                >
                  <button className="btn btn-primary m-2">Update</button>
                </Link>

                <Link
                  to="/delete"
                  state={{
                    id: student.id,
                  }}
                >
                  <button className="btn btn-danger m-2">Delete</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetAPI;
