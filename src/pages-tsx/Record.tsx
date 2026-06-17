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
}: Props) {
  const navigate = useNavigate();

  async function onClickSave() {
    const newRecord = { time, contents, star, title, genre };

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
    <div className="page">
      <h1>学習記録入力</h1>
      <p>学習時間：{formatTime(time)}</p>
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        placeholder="学習内容を入力"
      />
      <p>定着度</p>
      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} onClick={() => setStar(num)}>
          {num <= star ? "★" : "⭐︎"}
        </button>
      ))}
      <button onClick={onClickSave}>保存</button>
    </div>
  );
}

export default Record;
