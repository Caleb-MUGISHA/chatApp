import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import "./style.css";
const HomePage = () => {
  return (
    <Layout>
      <div className="loginContainer">
        <Card>
          <form>Login</form>
        </Card>
      </div>
    </Layout>
  );
};

export default HomePage;
