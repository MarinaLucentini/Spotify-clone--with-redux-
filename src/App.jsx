import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Homepage from "./component/Homepage";
import MyLibrary from "./component/MyLibrary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/myLibrary"
            element={<MyLibrary />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
