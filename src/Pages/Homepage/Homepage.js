import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function LoginPage() {
  const [data, SetData] = useState([]);

  const request = async () => {
    const { data } = await Axios.get("http://localhost:1880/symbolsList");
    console.log(data)
    if (data.length > 0) {
      SetData(data);
    }
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <div className="container bg-light bg-gradient">
      <nav
        className="navbar navbar-light"
        style={{ "backgroundColor": "#e3f2fd", padding:"15px" }}
      >
        <h3>Mongoto</h3>
      </nav>
      <hr />
      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>
  );
}
