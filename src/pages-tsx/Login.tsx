import { useState } from "react";
import { supabase } from "../supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onClickLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert("ログインに失敗しました");
  }

  async function onClickSignUp() {
    await supabase.auth.signUp({ email, password });
    alert("確認メールを送信しました");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">ログイン</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 text-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={onClickLogin}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            ログイン
          </button>
          <button
            onClick={onClickSignUp}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-blue-300"
          >
            新規登録
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
