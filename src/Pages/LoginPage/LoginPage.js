import React, { useEffect, useState } from "react";

import { onlyLetters } from "../../Utils/Validation/Validation";

import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
  const [symbol, SetSymbol] = useState("");
  const [message, SetMessage] = useState("");

  const loginSubmit = async () => {
    const valid = onlyLetters(symbol);
    if (!valid) {
      SetMessage("Cant find coin or the input is wrong");
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
                placeholder="Passkey"
                onChange={(event) => SetSymbol(event.target.value)}
              />
            </div>
            <hr />
            <div className="form-check">
                {message}
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
