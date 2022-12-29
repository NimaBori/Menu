import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Foods = ({ title, price, img, desc }) => {
  return (
    <Container>
      <Row className="my-4">
        <Col className="mx-1">
          <img src={img} alt={title} className="photo" />
        </Col>
        <Col>
          <Row md="auto" className="justify-content-between border-bottom">
            <Col className="p-0 text-capitalize">
              <h4>{title}</h4>
            </Col>
            <Col>
              <h4 className="text-warning ">${price}</h4>
            </Col>
          </Row>
          <Row className="mt-2">{desc}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Foods;
