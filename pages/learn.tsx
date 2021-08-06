import React from "react";
import { Container } from "react-bootstrap";
import LearnPage from "../components/LearnPage/Learn";
import Layout from "../components/Layout";

const Learn = () => {
  return (
    <Layout>
      <Container style={{ maxWidth: "100%", padding: 0 }}>
        <LearnPage />
      </Container>
    </Layout>
  );
};

export default Learn;
