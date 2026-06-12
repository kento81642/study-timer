import { useNavigate } from "react-router-dom";

function Start({ title, setTitle, genre, setGenre }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/timer");
  }

  return (
    <div className="page">
      <h1>学習開始</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="学習タイトルを入力"
      />
      <input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="学習ジャンルを入力"
      />
      <button onClick={handleClick}>開始</button>
    </div>
  );
}

export default Start;
