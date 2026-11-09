# Corporate Landing Page of Plenum Inc.

Next.jsで構築した、GitHub Pages向けの静的サイトです。

## ローカル起動

Node.js 22以降とYarn 4を使用します。

```bash
yarn install
yarn dev
```

[http://localhost:3000](http://localhost:3000) を開きます。停止は `Ctrl + C` です。
ヘッダーで日本語・英語を切り替えられ、選択した言語はブラウザに保存されます。
ビジョン本文は共通の英語表示です。セクション名とプロフィールは選択した言語で表示します。

## 検証・ビルド

```bash
node --experimental-strip-types --test tests/contact.test.mjs
yarn build
```

テストではメール送信先への通信をモック化し、実際のメールは送信しません。
`yarn build` は型チェックを実施し、静的ファイルを `out/` に生成します。
既存のGitHub Actionsでmainへのpush時にGitHub Pagesへ公開します。

## デモ問い合わせのメール送信

無料の [FormSubmit](https://formsubmit.co/) を使用します。APIキーや独自サーバーは不要です。
フォームの氏名・会社名・メールアドレス・問い合わせ内容はFormSubmitを経由し、
`contact@plenum.co.jp` に送信されます。
[AJAX API](https://formsubmit.co/ajax-documentation) によりページ遷移せず送信し、受付成功後にモーダルを閉じます。
失敗・タイムアウト時はモーダルと入力内容を保持します。
