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

  return <div></div>;
}
