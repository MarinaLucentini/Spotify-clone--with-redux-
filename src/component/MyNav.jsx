import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";

const MyNav = () => {
  return (
    <>
      <Navbar
        expand="md"
        className="fixed-left"
        id="sidebar"
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="align-items-start
        "
        >
          <Nav className="flex-column justify-content-between h-100 mx-3">
            <div>
              <Nav.Link href="#home">
                <i className="bi bi-house-door-fill"></i>
                &nbsp; Home
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <i className="bi bi-book-fill"></i>
                &nbsp; Your Library
              </Nav.Link>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className="h-100"
                >
                  Go
                </Button>
              </InputGroup>
            </div>

            <Container>
              <Row>
                <Col>
                  <Button
                    type="button"
                    className="signup-btn"
                  >
                    Sign Up
                  </Button>
                  <Button
                    type="button"
                    className="login-btn"
                  >
                    Sign Up
                  </Button>
                  <div className="d-flex align-items-center">
                    <Nav.Link href="#Cookie Policy">
                      Cookie Policy
                    </Nav.Link>{" "}
                    |
                    <Nav.Link href="#Privacy">
                      Privacy
                    </Nav.Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default MyNav;
