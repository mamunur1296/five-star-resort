import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AuthContext } from "../../Context/UseContext";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainContainer = () => {
  const { post } = useContext(AuthContext);
  return (
    <div>
      <Row xs={1} md={1} className="g-4">
        {post.map((pt, idx) => (
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

export default MainContainer;
