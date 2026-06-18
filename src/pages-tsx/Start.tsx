import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  setTitle: (value: string) => void;
  genre: string;
  setGenre: (value: string) => void;
};

function Start({ title, setTitle, genre, setGenre }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    if (title === "") return;
    navigate("/timer");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">学習開始</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="学習タイトルを入力"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm"
        />
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="学習ジャンルを入力"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 text-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={handleClick}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            開始
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
