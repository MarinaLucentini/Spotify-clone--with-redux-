import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SELECT_SONG } from "../redux/actions";

const MyCard = ({ song }) => {
  const dispatch = useDispatch();
  return (
    <>
      {song && (
        <Col
          className="text-center"
          onClick={() =>
            dispatch({
              type: SELECT_SONG,
              payload: song,
            })
          }
        >
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
