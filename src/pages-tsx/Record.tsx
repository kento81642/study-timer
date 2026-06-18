import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

type StudyRecord = {
  title: string;
  genre: string;
  time: number;
  contents: string;
  star: number;
};

type Props = {
  title: string;
  genre: string;
  time: number;
  contents: string;
  setContents: (contents: string) => void;
  star: number;
  setStar: (star: number) => void;
  records: StudyRecord[];
  setRecords: (records: StudyRecord[]) => void;
  userId: string;
};

function Record({
  title,
  genre,
  time,
  contents,
  setContents,
  star,
  setStar,
  records,
  setRecords,
  userId,
}: Props) {
  const navigate = useNavigate();

  async function onClickSave() {
    const newRecord = { time, contents, star, title, genre, user_id: userId };
    await supabase.from("records").insert(newRecord);
    setRecords([...records, newRecord]);
    setContents("");
    setStar(0);
    navigate("/history");
  }

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">学習記録入力</h1>
        <p className="text-sm text-gray-600 mb-4">学習時間：{formatTime(time)}</p>
        <textarea
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          placeholder="学習内容を入力"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm h-32"
        />
        <p className="text-sm text-gray-600 mb-2">定着度</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setStar(num)}
            className="bg-transparent text-2xl"
          >
            {num <= star ? "★" : "⭐︎"}
          </button>
        ))}
        <button
          onClick={onClickSave}
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          保存
        </button>
      </div>
    </div>
  );
}

export default Record;
