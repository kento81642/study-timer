import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";

type StudyRecord = {
    title: string;
    genre: string;
    time: number;
    contents: string;
    star: number;
}

type Props = {
    records: StudyRecord[];
    setRecords: (records: StudyRecord[]) => void;
}

function History ({records, setRecords } : Props) {
    const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editContents, setEditContents] = useState<string>("");

  const chartData = records.map((record, index) => ({
    name: `${index + 1}回目`,
    分: Math.floor(record.time / 60),
  }));

  const onClickDelete = (index: number): void => {
    setRecords(records.filter((_, i) => i !== index));
  };

  const onClickEdit = (index: number): void => {
    setEditIndex(index);
    setEditContents(records[index].contents);
  };

  const onClickSave = (index: number): void => {
    const newRecords = records.map((record, i) => {
      if (i === index) {
        return { ...record, contents: editContents };
      }
      return record;
    });
    setRecords(newRecords);
    setEditIndex(null);
  };

  return (
    <div className="page">
      <h1>学習記録一覧</h1>
      {records.length === 0 ? (
        <p>記録がありません</p>
      ) : (
        <>
          <BarChart width={400} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="分" />
            <Tooltip />
            <Bar dataKey="分" fill="#4f86f7" />
          </BarChart>

          <ul>
            {records.map((record, index) => (
              <li key={index}>
                <p>学習ジャンル：{record.genre}</p>
                <p>学習タイトル：{record.title}</p>
                <p>時間：{formatTime(record.time)}</p>
                {editIndex === index ? (
                  <>
                    <input
                      value={editContents}
                      onChange={(e) => setEditContents(e.target.value)}
                    />
                    <button onClick={() => onClickSave(index)}>保存</button>
                  </>
                ) : (
                  <>
                    <p>内容：{record.contents}</p>
                    <p>定着度：{record.star}★</p>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                    <button onClick={() => onClickEdit(index)}>編集</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default History;

