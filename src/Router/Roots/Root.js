import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Carusol from "../../Pages/Headers/Carusol";
import Nave from "../../Pages/Headers/Nave";
import LeftSideBar from "../../Pages/leftSideBar/LeftSideBar";
import RightSideBar from "../../Pages/RightSideBar/RightSideBar";

const Root = () => {
  return (
    <div>
      <Nave></Nave>
      <Carusol></Carusol>
      <Container>
        <Row>
          <Col lg={2}>
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col lg={7}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSideBar></RightSideBar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Root;
