import React, { useContext, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const Main = () => {
  const postid = useParams();
  const { post } = useContext(AuthContext);
  const postes = post.filter((p) => p.category_id === postid.id);
  console.log(postes);
  return (
    <div>
      <Row xs={1} md={1} className="g-4">
        {postes.map((pt, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={pt.thumbnail_url} />
              <Card.Body>
                <Card.Title>{pt.title}</Card.Title>
                <Link to="/booking">
                  <Button variant="outline-secondary">
                    <FaArrowRight></FaArrowRight> Booking Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
