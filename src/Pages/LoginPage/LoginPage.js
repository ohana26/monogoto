import React, { useEffect, useState } from "react";
import Axios from "axios";

import { onlyLetters } from "../../Utils/Validation/Validation";

import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [symbol, SetSymbol] = useState("");
  const [message, SetMessage] = useState("");
  const [load, Setload] = useState(false);

  const navigate = useNavigate();

  const loginSubmit = async () => {
    Setload(true);
    const valid = onlyLetters(symbol);
    if (!valid) {
      Setload(false);
      SetMessage("Cant find coin or the input is wrong ");
    } else {
      const { data } = await Axios.post("http://localhost:1880/symbolLogin", {
        symbol,
      });
      if (data.token) {
        Setload(false);
        navigate("/homepage");
      } else {
        Setload(false);
        SetMessage("Cant find coin or the input is wrong ");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="form-group">
              <label>Crypto</label>
              <hr />
              <input
                className="form-control"
                placeholder="Enter Symbol"
                onChange={(event) => SetSymbol(event.target.value)}
              />
            </div>
            <hr />
            <div className="form-check">
              {load === true ? <Spinner animation="border" /> : message}
            </div>
            <hr />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={loginSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
