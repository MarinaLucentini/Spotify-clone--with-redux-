import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";

import { useSelector } from "react-redux";

import MyCard from "./Card";

const MyLibrary = () => {
  const favourites = useSelector(
    (state) => state.favorites.content
  );

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <MyNav />
          </Col>
          <Col xs={12} md={9} className="offset-md-3 ">
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
            {favourites.length > 0 && (
              <Row>
                <Col xs={10}>
                  <div id="rock">
                    <h2>La tua playlist</h2>
                    <Row
                      xs={1}
                      sm={2}
                      lg={3}
                      xl={4}
                      className="imgLinks py-3"
                      id="rockSection"
                    >
                      {favourites.map((song) => (
                        <MyCard key={song.id} song={song} />
                      ))}
                    </Row>
                  </div>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};
export default MyLibrary;
