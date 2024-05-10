import { Col } from "react-bootstrap";

const Card = ({ song }) => {
  return (
    <>
      <Col className="text-center">
        <img
          src={song.artist.picture_medium}
          alt=""
          className="img-fluid"
        />
        <p>singleSong.title</p>
        <p>singleSong.artist.name</p>
      </Col>
    </>
  );
};
export default Card;
