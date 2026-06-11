function History({ records }) {
  return (
    <div>
      <h1>学習記録一覧</h1>
      {records.length === 0 ? (
        <p>記録がありません</p>
      ) : (
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              <p>時間：{record.time}秒</p>
              <p>内容：{record.contents}</p>
              <p>定着度:{record.star}★</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
