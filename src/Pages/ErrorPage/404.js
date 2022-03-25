import React from "react";
import "./404.css";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  const ReturnHome = () => {
    navigate("/");
  };

  return (
    <div id="Page404">
      <div className="row ">
        <div className="col align-self-center fixed-bottom mb-4">
          <button
            type="button"
            className="btn btn-warning "
            onClick={ReturnHome}
          >
            Retun to login page
          </button>
        </div>
      </div>
    </div>
  );
}
