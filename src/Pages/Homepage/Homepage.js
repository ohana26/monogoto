import React, { useEffect, useState } from "react";
import Axios from "axios";
import Table from "../../Components/Table/Table.js";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [data, SetData] = useState([]);

  const navigate = useNavigate();

  const request = async () => {
    const { data } = await Axios.get("http://localhost:1880/symbolsList");
    console.log(data);
    if (data.length > 0) {
      SetData(data);
    }
  };
  useEffect(() => {
    request();
  }, []);

  const Logout = () => {
    navigate("/");
  };

  return (
    <div className="container bg-light bg-gradient">
      <nav
        className="navbar navbar-light"
        style={{ "backgroundColor": "#e3f2fd", padding:"15px" }}
      >
        <h3>Mongoto</h3>
        <button className="btn btn-secondary" id="logout" onClick={Logout}>
          LogOut
        </button>
      </nav>
      <hr />
      <div className="row">
        <div className="col">
          <Table data={data} columns={["Symbol"]}></Table>
        </div>
      </div>
    </div>
  );
}
