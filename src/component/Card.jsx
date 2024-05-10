import { Col } from "react-bootstrap";

const MyCard = ({ song }) => {
  console.log(song);
  return (
    <>
      {song && (
        <Col className="text-center">
          <img
            src={song.artist.picture_medium}
            alt=""
            className="img-fluid"
          />
          <p>{song.title}</p>
          <p>{song.artist.name}</p>
        </Col>
      )}
    </>
  );
};
export default MyCard;
