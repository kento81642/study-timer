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
    <div className="page">
      <h1>ログイン</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワード"
      />
      <button onClick={onClickLogin}>ログイン</button>
      <button onClick={onClickSignUp}>新規登録</button>
    </div>
  );
}

export default Login;
