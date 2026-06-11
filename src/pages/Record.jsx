function Record() {
  return (
    <div>
      <h1>学習記録入力</h1>
      <p>学習時間：00:00:00</p>
      <textarea placeholder="学習内容を入力" />
      <p>定着度</p>
      <button>★</button>
      <button>★</button>
      <button>★</button>
      <button>★</button>
      <button>★</button>
      <button>保存</button>
    </div>
  )
}

export default Record