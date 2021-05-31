import React, { useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import "./style.css";
import { signUp } from "../../actions";
import { useDispatch } from "react-redux";

const RegisterPage = (props) => {
  // states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signUp(user));
  };
  return (
    <Layout>
      <div className="registerContainer">
        <Card>
          <form onSubmit={registerUser}>
            <h2>Sign Up</h2>
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="FirstName"
            />
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="LastName"
            />
            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </form>
          <div>
            <button>Sign UP</button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterPage;
