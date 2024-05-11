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
import { useSelector } from "react-redux";

const MyFooter = () => {
  const selectedSong = useSelector(
    (state) => state.selectedsong.content
  );
  return (
    <>
      <Container
        fluid
        className="fixed-bottom bg-container pt-1"
      >
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 justify-content-evenly">
              <Col
                xs={6}
                md={4}
                className="d-flex align-items-center justify-content-end"
              >
                {selectedSong ? (
                  <>
                    <img
                      src={
                        selectedSong.artist.picture_small
                      }
                      alt="Artist picture"
                      className="img-fluid"
                    />
                    <div className="ms-3 text-secondary">
                      <p className="m-0">
                        {selectedSong.title}
                      </p>
                      <p className="m-0">
                        {selectedSong.artist.name}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src=""
                      alt="Artist picture"
                      className="img-fluid"
                    />
                    <div className="ms-3 text-secondary">
                      <p className="m-0">Nome canzone...</p>
                      <p className="m-0">Nome artista...</p>
                    </div>
                  </>
                )}
              </Col>
              <Col
                xs={6}
                md={4}
                className="playerControls px-3"
              >
                <Stack direction="horizontal">
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
              <Col
                xs={6}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-heart text-secondary"></i>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
