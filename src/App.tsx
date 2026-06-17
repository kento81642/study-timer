import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages-tsx/Start";
import Timer from "./pages-tsx/Timer";
import Record from "./pages-tsx/Record";
import History from "./pages-tsx/History";
import "./App.css";

type StudyRecord = {
  id?: number;
  title: string;
  genre: string;
  time: number;
  contents: string;
  star: number;
};

function App() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState(0);
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);
  const [records, setRecords] = useState<StudyRecord[]>([]);

  useEffect(() => {
    supabase
      .from("records")
      .select("*")
      .then(({ data }) => {
        if (data) setRecords(data);
      });
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Start
              title={title}
              setTitle={setTitle}
              genre={genre}
              setGenre={setGenre}
            />
          }
        />
        <Route
          path="/timer"
          element={<Timer time={time} setTime={setTime} />}
        />
        <Route
          path="/record"
          element={
            <Record
              title={title}
              genre={genre}
              time={time}
              contents={contents}
              setContents={setContents}
              star={star}
              setStar={setStar}
              records={records}
              setRecords={setRecords}
            />
          }
        />
        <Route
          path="/history"
          element={<History records={records} setRecords={setRecords} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
