import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

const Homepage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <MyNav />
          </Col>
          <Col
            xs={12}
            md={9}
            className="offset-md-3 mainPage"
          >
            <Row>
              <Col
                xs={9}
                lg={11}
                className="mainLinks d-none d-md-flex"
              >
                <a href="#TRENDING">TRENDING</a>
                <a href="#PODCAST">PODCAST</a>
                <a href="#MOOD AND GENRES">
                  MOOD AND GENRES
                </a>
                <a href="#NEW RELEASES">NEW RELEASES</a>
                <a href="#DISCOVER">DISCOVER</a>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <Row
                    xs={1}
                    sm={2}
                    lg={3}
                    xl={4}
                    className="imgLinks py-3"
                    id="rockSection"
                  ></Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <Row
                    xs={1}
                    sm={2}
                    lg={3}
                    xl={4}
                    className="imgLinks py-3"
                    id="popSection"
                  ></Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#Hip Hop</h2>
                  <Row
                    xs={1}
                    sm={2}
                    lg={3}
                    xl={4}
                    className="imgLinks py-3"
                    id="hipHopSection"
                  ></Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};
export default Homepage;
