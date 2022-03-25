import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

export default function InfoModal({ name }) {
  const [show, setShow] = useState(false);
  const [data, SetData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    request();
  };

  const request = async () => {
    const { data } = await Axios.post("http://localhost:1880/symbolData", {
      name,
    });
    console.log(data)
    if (data.length > 0) {
      SetData(data[0]);
    }
  };

  return (
    <div className="d-grid gap-2">
      <Button variant="dark" onClick={handleShow}>{name}</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name} - Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Opening price: {data.openPrice}</p>
          <p>Opening time: {data.openTime}</p>
          <p>Closing price: {data.prevClosePrice}</p>
          <p>Closing time: {data.closeTime}</p>
          <p>Price Change Percent: {data.priceChangePercent}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
