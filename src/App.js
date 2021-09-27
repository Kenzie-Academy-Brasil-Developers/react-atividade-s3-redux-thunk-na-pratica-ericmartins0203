import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCommentThunk } from "./store/modules/user/thunks";

function App() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState();

  const result = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(addCommentThunk(comment));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{result.name}</h2>
        <input
          placeholder="mensagem"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => handleClick()}> Enviar </button>

        <ul>
          {result.comments &&
            result.comments.map((comment, index) => (
              <li key={index}> {comment} </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
