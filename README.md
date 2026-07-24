# 学習タイマー記録アプリ

学習時間をタイマーで計測し、内容・定着度を記録・管理できるWebアプリです。

**本番URL：** https://study-timer-bay.vercel.app

---

## 機能

- タイマーで学習時間を計測
- 学習内容・定着度（★1〜5）を記録
- 記録の一覧表示・編集・削除
- 学習時間の棒グラフ表示
- ユーザー認証（新規登録・ログイン・ログアウト）
- ユーザーごとのデータ分離

---

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フロントエンド | React 19 / TypeScript |
| ルーティング | React Router v6 |
| バックエンド / DB | Supabase（PostgreSQL） |
| 認証 | Supabase Auth |
| グラフ | Recharts |
| ビルドツール | Vite |
| Lint / Format | ESLint / Prettier |
| デプロイ | Vercel |

---

## 工夫した点

- **TypeScriptで型安全に実装**：Props・state・関数の引数と戻り値すべてに型を定義
- **ユーザーデータ分離**：`user_id` カラムと `.eq()` フィルタリングで他ユーザーのデータを参照不可に
- **環境変数管理**：APIキーを `.env` に分離し、GitHubに公開しない設計

---

## 画面構成

| 画面 | 説明 |
|---|---|
| ログイン | メールアドレス・パスワードで認証 |
| 学習開始 | タイトル・ジャンルを入力してタイマー開始 |
| 学習中 | タイマー計測・停止・終了 |
| 記録入力 | 学習内容・定着度を入力して保存 |
| 記録一覧 | 過去の記録を一覧表示・編集・削除 |

---

## ローカル起動

```bash
git clone https://github.com/kento81642/study-timer.git
cd study-timer
npm install --legacy-peer-deps
```

`.env` ファイルをルートに作成：

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

```bash
npm run dev
```
