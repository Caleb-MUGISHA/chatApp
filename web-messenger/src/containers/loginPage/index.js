import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import "./style.css";

const LoginPage = (props) => {
  return (
    <Layout>
      <div className="loginContainer">
        <Card>
          <form>login</form>
        </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
