import { useState } from "react";
import data from "./data";
import Foods from "./Foods";
import Categories from "./Categories";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
const allCategories = ["all", ...new Set(data.map((data) => data.category))];

function App() {
  const [foods, setFoods] = useState(data);

  const handleChoice = (userPick) => {
    if (userPick === "all") {
      setFoods(data);
      return;
    }
    setFoods(data.filter((food) => food.category === userPick));
  };

  return (
    <>
      {/* Header container */}
      <Container className="justify-content-center border-bottom border-danger border-4 w-25 my-5">
        <h1 className="text-center">Our Menu Today</h1>
      </Container>
      {/* Btns container */}
      <Container className="d-flex justify-content-center my-5 ">
        {allCategories.map((category, index) => (
          <Categories key={index} category={category} onChoice={handleChoice} />
        ))}
      </Container>
      {/* Menu items container */}
      <Container>
        <Row>
          {foods.map((food) => (
            <Col key={food.id} xs={12} lg={6}>
              <Foods {...food} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
