import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";
import { supabase } from "../supabase";

type StudyRecord = {
  id?: number;
  title: string;
  genre: string;
  time: number;
  contents: string;
  star: number;
};

type Props = {
  records: StudyRecord[];
  setRecords: (records: StudyRecord[]) => void;
};

function History({ records, setRecords }: Props) {
  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editContents, setEditContents] = useState<string>("");

  const onClickLogout = async (): Promise<void> => {
    await supabase.auth.signOut();
  };

  const chartData = records.map((record, index) => ({
    name: `${index + 1}回目`,
    分: Math.floor(record.time / 60),
  }));

  const onClickDelete = async (index: number): Promise<void> => {
    const target = records[index];
    await supabase.from("records").delete().eq("id", target.id);
    setRecords(records.filter((_, i) => i !== index));
  };

  const onClickEdit = (index: number): void => {
    setEditIndex(index);
    setEditContents(records[index].contents);
  };

  const onClickSave = async (index: number): Promise<void> => {
    const target = records[index];
    await supabase
      .from("records")
      .update({ contents: editContents })
      .eq("id", target.id);
    const newRecords = records.map((record, i) => {
      if (i === index) return { ...record, contents: editContents };
      return record;
    });
    setRecords(newRecords);
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">学習記録一覧</h1>
          <button
            onClick={onClickLogout}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300"
          >
            ログアウト
          </button>
        </div>

        {records.length === 0 ? (
          <p className="text-gray-500">記録がありません</p>
        ) : (
          <>
            <div className="bg-white p-4 rounded-xl shadow-md mb-6">
              <BarChart width={500} height={250} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="分" />
                <Tooltip />
                <Bar dataKey="分" fill="#4f86f7" />
              </BarChart>
            </div>

            <ul className="space-y-4">
              {records.map((record, index) => (
                <li key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-500 mb-1">学習ジャンル：{record.genre}</p>
                  <p className="text-lg font-bold text-gray-800 mb-1">学習タイトル：{record.title}</p>
                  <p className="text-sm text-gray-500 mb-3">時間：{formatTime(record.time)}</p>
                  {editIndex === index ? (
                    <>
                      <input
                        value={editContents}
                        onChange={(e) => setEditContents(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-sm"
                      />
                      <button
                        onClick={() => onClickSave(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                      >
                        保存
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-700 mb-1">内容：{record.contents}</p>
                      <p className="text-sm text-gray-700 mb-3">定着度：{record.star}★</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => onClickDelete(index)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
                        >
                          削除
                        </button>
                        <button
                          onClick={() => onClickEdit(index)}
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300"
                        >
                          編集
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default History;
