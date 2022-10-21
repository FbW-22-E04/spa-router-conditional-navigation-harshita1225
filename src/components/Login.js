import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });

  const [inputData, setInputData] = useState({
    userName: "",
    password: "",
    submit: false,
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (
      inputData.userName === data.userName &&
      inputData.password === data.password
    ) {
      navigate("/home");
    } else {
      setInputData({ ...inputData, submit: true });
    }
  };

  return (
    <>
      <h1>Login</h1>
      {inputData.submit && <p>The username or password is incorrect!</p>}

      <form onSubmit={formHandler}>
        <input
          onChange={changeHandler}
          type="text"
          name="userName"
          placeholder="Username"
        />
        <input
          onChange={changeHandler}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
