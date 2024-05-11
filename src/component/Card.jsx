import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SELECT_SONG, playSong } from "../redux/actions";

const MyCard = ({ song }) => {
  const dispatch = useDispatch();
  const dispatchplay = useDispatch();
  const handleSelectedSong = (song) => {
    dispatch({
      type: SELECT_SONG,
      payload: song,
    });
    dispatchplay(playSong(song.preview));
  };
  return (
    <>
      {song && (
        <Col
          className="text-center"
          onClick={() => handleSelectedSong(song)}
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
