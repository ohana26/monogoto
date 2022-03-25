import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [symbol, SetSymbol] = useState("");

  const loginSubmit = async () => {};

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
