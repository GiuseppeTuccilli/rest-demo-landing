import { Col, Container, Row } from "react-bootstrap";

const Home = function () {
  return (
    <>
      <div className="homeBackImg d-flex align-items-center text-white ">
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} lg={6} className="d-flex justify-content-center">
              <h1 className="text-center m-0 fw-bold ">
                lorem Ipsum <br /> Lorem ipsum dolor sit amet consectetur
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "60rem" }} className="bg-primary"></div>
    </>
  );
};

export default Home;
