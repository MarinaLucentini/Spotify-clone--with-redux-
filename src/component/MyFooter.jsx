import {
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const MyFooter = () => {
  return (
    <>
      <Container
        fluid
        className="fixed-bottom bg-container pt-1"
      >
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls">
                <Stack direction="horizontal" gap={5}>
                  <img src={shuffle} alt="shuffle" />

                  <img src={prev} alt="prev" />

                  <img src={play} alt="play" />

                  <img src={next} alt="next" />

                  <img src={repeat} alt="repeat" />
                </Stack>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
