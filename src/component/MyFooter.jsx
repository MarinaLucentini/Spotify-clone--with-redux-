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
                  <div>
                    <img src={shuffle} alt="shuffle" />
                  </div>
                  <div>
                    <img src={prev} alt="prev" />
                  </div>
                  <div>
                    <img src={play} alt="play" />
                  </div>
                  <div>
                    <img src={next} alt="next" />
                  </div>
                  <div>
                    <img src={repeat} alt="repeat" />
                  </div>
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
