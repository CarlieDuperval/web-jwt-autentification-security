import React, { useState } from "react";
import { Alert, message, Button } from "antd";

export default function Home({ token }) {
  const [massge, setMessage] = useState("");
  const [error, setError] = useState("");
  const getPrivateStuff = () => {
    fetch("http://localhost:5050/private", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setMessage("");
          return;
        }
        setMessage(data.message);
        setError("");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <h1>Login</h1>
      {message && <Alert message={message} type="succes" />}
      {message && <Alert message={message} type="succes" />}
      <Button onClick={getPrivateStuff} type="primary" size="large">
        {" "}
        Get Private Stuff
      </Button>
    </>
  );
}
